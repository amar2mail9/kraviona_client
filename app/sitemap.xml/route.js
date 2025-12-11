// app/sitemap.xml/route.js
import { getAllSlugs } from "@/lib/api";

export async function GET() {
    const baseUrl = "https://kraviona.vercel.app";

    const posts = await getAllSlugs();
    // Must return: [{ slug: "post-1", updatedAt: "2024-..." }]

    const urls = [
        {
            loc: baseUrl,
            lastmod: new Date().toISOString()
        },
        ...posts.map(post => ({
            loc: `${baseUrl}/blog/${post.slug}`,
            lastmod: post.updatedAt
                ? new Date(post.updatedAt).toISOString()
                : new Date().toISOString()
        }))
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                u => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`
            )
            .join("")}
</urlset>`;

    return new Response(xml, {
        status: 200,
        headers: { "Content-Type": "application/xml" }
    });
}
