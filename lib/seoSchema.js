export function blogToSchema(post) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://kraviona.vercel.app/blog/${post.slug}`
        },

        "headline": post.title,
        "description": post.metaDescription || post.excerpt,

        // Recommended OG image: 1200 × 630
        "image": post.ogImage
            ? `https://kraviona.vercel.app${post.ogImage}`
            : "https://kraviona.vercel.app/og-images/kraviona-default.jpg",

        "author": {
            "@type": "Person",
            "name": post.authorName || "Kraviona Team"
        },

        "publisher": {
            "@type": "Organization",
            "name": "Kraviona",
            "logo": {
                "@type": "ImageObject",
                "url": "https://kraviona.vercel.app/og-images/kraviona-logo.jpg"
            }
        },

        "datePublished": post.publishedAt
            ? new Date(post.publishedAt).toISOString()
            : undefined,

        "dateModified": post.updatedAt
            ? new Date(post.updatedAt).toISOString()
            : post.publishedAt
                ? new Date(post.publishedAt).toISOString()
                : undefined
    };
}
