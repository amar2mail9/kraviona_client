// app/sitemap.xml/route.js
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Configuration
const SITE_URL = process.env.SITE_URL || "https://kraviona.vercel.app";
const DATA_PATH = process.env.BLOG_JSON_PATH || "./data/kraviona.blogs.json";

/** * robustly parse various date formats including MongoDB EJSON 
 */
function parseDate(dateInput) {
    if (!dateInput) return new Date();
    try {
        // Handle MongoDB EJSON { "$date": "..." }
        if (typeof dateInput === 'object' && dateInput.$date) {
            return new Date(dateInput.$date);
        }
        // Handle standard string or Date object
        return new Date(dateInput);
    } catch (e) {
        return new Date();
    }
}

/** * Native slug generator (replaces slugify dependency) 
 */
function generateSlug(text) {
    if (!text) return "";
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word chars and dashes with a single dash
        .replace(/^-+|-+$/g, '');       // Remove leading/trailing dashes
}

/** * Read local JSON file (server-side) 
 */
async function readLocalPosts() {
    try {
        const filePath = path.join(process.cwd(), DATA_PATH);

        // Check if file exists before reading to avoid hard crash
        try {
            await fs.access(filePath);
        } catch {
            console.warn(`Sitemap Warning: File not found at ${filePath}`);
            return [];
        }

        const raw = await fs.readFile(filePath, "utf8");
        const data = JSON.parse(raw);

        // Flexible extraction logic
        if (Array.isArray(data)) return data;
        if (data.data && Array.isArray(data.data)) return data.data;
        if (data.posts && Array.isArray(data.posts)) return data.posts;

        // Last resort: search keys for an array
        for (const key in data) {
            if (Array.isArray(data[key])) return data[key];
        }

        return [];
    } catch (err) {
        console.error("Sitemap Error:", err.message);
        return [];
    }
}

export async function GET() {
    const posts = await readLocalPosts();
    const currentDate = new Date().toISOString();

    // 1. Define Static Pages
    const staticPages = [
        { url: "", priority: 1.0, changefreq: "daily" },
        { url: "blog", priority: 0.8, changefreq: "daily" },
        { url: "about", priority: 0.8, changefreq: "monthly" },
        { url: "contact", priority: 0.8, changefreq: "monthly" },
        { url: "login", priority: 0.5, changefreq: "monthly" },
        { url: "sign-up", priority: 0.5, changefreq: "monthly" },
    ].map((page) => ({
        loc: `${SITE_URL}/${page.url}`.replace(/\/+$/, ""), // Remove trailing slash if empty
        lastmod: currentDate,
        priority: page.priority,
        changefreq: page.changefreq
    }));

    // 2. Process Dynamic Blog Posts
    const dynamicPosts = posts
        .filter((p) => p && !p.isDeleted && p.status === "published") // Ensure only published posts
        .map((post) => {
            // Determine URL: Use explicit canonicalURL or fallback to generated slug
            let location = "";

            if (post.canonicalURL && post.canonicalURL.startsWith("http")) {
                location = post.canonicalURL;
            } else {
                const slug = post.slug || generateSlug(post.title);
                location = `${SITE_URL}/blog/${slug}`;
            }

            // Handle Dates safely
            const dateObj = parseDate(post.updatedAt || post.createdAt);

            return {
                loc: location,
                lastmod: dateObj.toISOString(),
                priority: 0.7,
                changefreq: "weekly"
            };
        });

    const allUrls = [...staticPages, ...dynamicPosts];

    // 3. Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
        },
    });
}