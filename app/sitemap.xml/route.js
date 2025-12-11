// app/sitemap.xml/route.js
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import slugify from "slugify";

const SITE_URL = process.env.SITE_URL || "https://kraviona.vercel.app";
const DATA_PATH = process.env.BLOG_JSON_PATH || "./data/kraviona.blogs.json";

/** Read local JSON file (server-side) and return posts array */
async function readLocalPosts() {
    try {
        const filePath = path.join(process.cwd(), DATA_PATH);
        const raw = await fs.readFile(filePath, "utf8");
        const data = JSON.parse(raw);
        // If the file is an object with array under data/posts, try to extract.
        if (Array.isArray(data)) return data;
        if (Array.isArray(data.data)) return data.data;
        if (Array.isArray(data.posts)) return data.posts;
        // fallback: collect any array found at top-level
        for (const k of Object.keys(data || {})) {
            if (Array.isArray(data[k])) return data[k];
        }
        return [];
    } catch (err) {
        console.error("readLocalPosts error:", err);
        return [];
    }
}

function normalizeSlug(rawSlugOrTitle) {
    if (!rawSlugOrTitle) return "";
    // if raw contains full URL, extract last segment
    try {
        const maybeUrl = String(rawSlugOrTitle);
        // decode any percent-encoding, then slugify strict
        const decoded = decodeURIComponent(maybeUrl);
        // Use slugify with strict to remove punctuation (colons, etc.)
        return slugify(decoded, { lower: true, strict: true });
    } catch (err) {
        // fallback: basic replacement
        return String(rawSlugOrTitle)
            .toLowerCase()
            .replace(/%3A/gi, "")
            .replace(/[:/]+/g, "-")
            .replace(/[^a-z0-9-]+/g, "-")
            .replace(/--+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
}

function formatDateIso(d) {
    if (!d) return new Date().toISOString();
    try {
        return new Date(d).toISOString();
    } catch {
        return new Date().toISOString();
    }
}

export async function GET() {
    const posts = await readLocalPosts();

    // static site pages to include
    const staticUrls = [
        { loc: `${SITE_URL}/`, lastmod: formatDateIso() },
        { loc: `${SITE_URL}/blog`, lastmod: formatDateIso() },
        { loc: `${SITE_URL}/about`, lastmod: formatDateIso() },
        { loc: `${SITE_URL}/contact`, lastmod: formatDateIso() },
        { loc: `${SITE_URL}/login`, lastmod: formatDateIso() },
        { loc: `${SITE_URL}/sign-up`, lastmod: formatDateIso() },
    ];

    // build post urls using canonicalURL if present; otherwise normalize slug
    const postUrls = posts
        .filter((p) => p && !p.isDeleted && p.isPublished !== false)
        .map((p) => {
            const canonical = p.canonicalURL && String(p.canonicalURL).trim();
            const slugSource = p.slug || p.metaSlug || p.title || "";
            const cleanedSlug = normalizeSlug(slugSource);
            const loc = canonical && canonical.startsWith("http")
                ? canonical
                : `${SITE_URL.replace(/\/+$/, "")}/blog/${encodeURIComponent(cleanedSlug)}`;
            const lastmod = formatDateIso(p.updatedAt?.$date || p.updatedAt || p.dateModified || p.updatedAt || p.updatedAt?.toString() || p.updatedAt);
            return { loc, lastmod };
        });

    const urls = [...staticUrls, ...postUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (u) => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
            )
            .join("")}
</urlset>`.trim();

    return new NextResponse(xml, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=0, s-maxage=3600",
        },
    });
}
