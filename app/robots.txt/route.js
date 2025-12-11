// app/robots.txt/route.js
export function GET() {
    const content = `
User-agent: *
Allow: /
Sitemap: https://kraviona.vercel.app/sitemap.xml
Disallow: /api/admin
`;

    return new Response(content.trim(), {
        headers: { "Content-Type": "text/plain" }
    });
}
