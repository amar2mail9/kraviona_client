// lib/api.js

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_API;

// Debug check
if (!API_BASE) {
    console.warn("⚠️ WARNING: NEXT_PUBLIC_BACKEND_API is not defined in .env");
}

// --------------------------------------------------
// 1. Get ALL blog slugs for sitemap.xml
// --------------------------------------------------
export async function getAllSlugs() {
    try {
        const res = await fetch(`${API_BASE}/posts/slugs`, {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error("Failed to fetch slugs:", res.status);
            return [];
        }

        return await res.json(); // must return: [{ slug, updatedAt }]
    } catch (err) {
        console.error("Error in getAllSlugs:", err);
        return [];
    }
}

// --------------------------------------------------
// 2. Get a single full blog by slug
// --------------------------------------------------
export async function getPostBySlug(slug) {
    try {
        const res = await fetch(`${API_BASE}/posts/${slug}`, {
            cache: "no-store", // IMPORTANT for dynamic SEO
        });

        if (!res.ok) {
            return null;
        }

        return await res.json(); // { title, html, metaTitle, metaDescription, ogImage... }
    } catch (err) {
        console.error("Error in getPostBySlug:", err);
        return null;
    }
}

// --------------------------------------------------
// 3. Get all posts (optional for blog list)
// --------------------------------------------------
export async function getAllPosts() {
    try {
        const res = await fetch(`${API_BASE}/posts`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return [];
        }

        return await res.json();
    } catch (err) {
        console.error("Error in getAllPosts:", err);
        return [];
    }
}
