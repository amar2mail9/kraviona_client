// app/sitemap.xml/route.js
import { NextResponse } from "next/server";

const SITE_URL = process.env.SITE_URL || "https://kraviona.vercel.app";
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API || SITE_URL;

/** fetch list of blog posts from your API (adjust endpoint/shape) */
async function fetchPosts() {
    try {
        const res = await fetch(`${API_BASE.replace(/\/+$/, "")}/public-blogs`, { cache: "no-store" });
        if (!res.ok) return [];
        const data = await res.json();
        // Expecting data to be array of { slug, updatedAt } or adjust accordingly
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.error("fetchPosts error:", err);
        return [];
    }
}

function formatDateIso(d) {
    if (!d) return new Date().toISOString();
    return new Date(d).toISOString();
}

export async function GET() {
    const posts = await fetchPosts();

    const staticUrls = [
        { url: `${SITE_URL}/`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/blog`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/about`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/contact`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/login`, lastmod: formatDateIso() },
        { url: `${SITE_URL}/sign-up`, lastmod: formatDateIso() },
    ];

    const postUrls = posts.map((p) => ({
        url: `${SITE_URL}/blog/${encodeURIComponent(p.slug)}`,
        lastmod: formatDateIso(p.updatedAt || p.publishedAt || new Date()),
    }));

    const urls = [...staticUrls, ...postUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
            .map(
                (u) => `
      <url>
        <loc>${u.url}</loc>
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
