import { SingleBlog } from "@/components/singleblog/SingleBlog";
import React from "react";

/** Fetch blog details with Error Handling */
async function getBlogData(slug) {
    try {
        // 1. USE THE CORRECT ENVIRONMENT VARIABLE
        // Ensure this points to your backend (e.g., http://localhost:5000 or your Render/AWS URL)
        // NOT your frontend URL (https://kraviona.vercel.app)
        const base = process.env.NEXT_PUBLIC_BACKEND_API || process.env.NEXT_PUBLIC_API_URL;

        if (!base) {
            console.error("❌ Error: NEXT_PUBLIC_BACKEND_API is missing in .env file");
            return null;
        }

        // 2. CONSTRUCT THE CORRECT API URL
        // If your backend routes are at /blog/:slug, this is fine. 
        // If they are at /api/blog/:slug, add /api here.
        const url = `${base.replace(/\/+$/, "")}/blog/${encodeURIComponent(slug)}`;

        console.log(`📡 Fetching Blog Data from: ${url}`); // CHECK THIS LOG IN TERMINAL

        const res = await fetch(url, { cache: "no-store" });

        // 3. CHECK CONTENT TYPE BEFORE PARSING
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("text/html")) {
            const text = await res.text();
            console.error(`❌ Error: API returned HTML instead of JSON. You are likely fetching the frontend page: ${url}`);
            // console.error("HTML Preview:", text.substring(0, 100));
            return null;
        }

        if (!res.ok) {
            console.error(`❌ API Error: ${res.status} ${res.statusText}`);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error("❌ Fetch failed:", error);
        return null;
    }
}

/** Generate SEO metadata */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getBlogData(slug);
    const blog = post.blog;

    if (!blog) {
        return {
            title: "Blog Not Found | Kraviona",
            description: "This blog does not exist.",
            robots: { index: false, follow: true }, // Don't index 404s
        };
    }

    const url = `https://kraviona.vercel.app/blog/${slug}`;
    const image = blog.coverImage || "https://kraviona.vercel.app/default-blog.png";

    return {
        title: `${blog.title} | Kraviona Blog`,
        description: blog.metaDescription || blog.excerpt || "Read this blog on Kraviona.",
        openGraph: {
            title: blog.title,
            description: blog.metaDescription || blog.excerpt,
            url,
            images: [image],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.metaDescription || blog.excerpt,
            images: [image],
        },
    };
}

/** Page Component */
const Page = async ({ params }) => {
    const { slug } = await params;

    // We fetch data here to pass to SingleBlog and for Schema
    const blog = await getBlogData(slug);

    // If fetch failed or blog doesn't exist
    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h1 className="text-2xl font-bold text-gray-800">Blog not found</h1>
                <p className="text-gray-600">The requested article could not be loaded.</p>
            </div>
        );
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://kraviona.vercel.app/blog/${slug}`
        },
        "headline": blog.title,
        "image": [blog.coverImage],
        "datePublished": blog.publishedAt || new Date().toISOString(),
        "dateModified": blog.updatedAt || blog.publishedAt || new Date().toISOString(),
        "author": {
            "@type": "Person",
            "name": blog.author || "Kraviona"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Kraviona",
            "logo": {
                "@type": "ImageObject",
                "url": "https://kraviona.vercel.app/logo.png"
            }
        },
        "description": blog.metaDescription || blog.excerpt,
    };

    return (
        <div>
            {/* JSON-LD Injected Here */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

            {/* PASS DATA TO CLIENT COMPONENT 
                Important: SingleBlog must be updated to accept `blogData` prop 
                instead of fetching it again.
            */}
            <SingleBlog slug={slug} initialBlogData={blog} />
        </div>
    );
};

export default Page;