// app/sitemap.xml/route.js
import { NextResponse } from "next/server";

const SITE_URL = process.env.SITE_URL || "https://kraviona.vercel.app";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API || SITE_URL;

/** Normalize and find posts array from multiple API shapes */
function extractPosts(payload) {
    if (!payload) return [];
    if (Array.isArray(payload)) return payload;
    // common wrappers
    if (Array.isArray(payload.data)) return payload.data;
    if (Array.isArray(payload.posts)) return payload.posts;
    if (Array.isArray(payload.blogs)) return payload.blogs;
    // try deeper search (first array found in object)
    for (const key of Object.keys(payload)) {
        if (Array.isArray(payload[key])) return payload[key];
    }
    return [];
}

async function fetchPosts() {
    try {
        const endpoint = `${API_BASE.replace(/\/+$/, "")}/public-blogs`;
        const res = await fetch(endpoint, { cache: "no-store" });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`HTTP ${res.status} - ${res.statusText} - ${text.slice(0, 200)}`);
        }

        const data = await res.json().catch(() => null);
        const posts = extractPosts(data);

        // Add a quick sanity check: ensure each post has a slug property
        const filtered = posts.filter(p => p && (p.slug || p.id || p.url));
        return { posts: filtered, rawCount: posts.length, endpoint };
    } catch (err) {
        // return error info for debugging
        return { posts: [], error: err.message || String(err), endpoint: `${API_BASE}/public-blogs` };
    }
}

function formatDateIso(d) {
    if (!d) return new Date().toISOString();
    return new Date(d).toISOString();
}

export async function GET() {
    const result = await fetchPosts();
    const posts = result.posts || [];

    const staticUrls = [
        { url: `${SITE_URL}/`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/blog`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/about`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/contact`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/login`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/sign-up`, lastmod: formatDateIso() },
    ];

    const postUrls = posts.map((p) => {
        // prefer slug, fallback to id or url
        const slug = p.slug || p.id || (p.url ? String(p.url).replace(/^\/+/, "") : "");
        const safeSlug = encodeURIComponent(slug);
        const loc = p.url && String(p.url).startsWith("http") ? p.url : `${SITE_URL}/blog/${safeSlug}`;
        return {
            loc,
            lastmod: formatDateIso(p.updatedAt || p.publishedAt || p.createdAt || new Date()),
        };
    });

    const urls = [...staticUrls, ...postUrls];

    // include debugging comment (temporary) so you can see posts count and any fetch error in the sitemap response
    const debugComment = `posts_count:${result.rawCount ?? posts.length}; fetched_from:${result.endpoint}; error:${result.error ? result.error.replace(/\n/g, " ") : "none"}`;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <!-- ${debugComment} -->
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
            .map(
                (u) => `
      <url>
        <loc>${u.loc || u.url}</loc>
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
