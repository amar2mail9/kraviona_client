

// import { PreviewBlog } from "@/components/singleblog/PreviewBlog";
import { SingleBlog } from "@/components/singleblog/SingleBlog";
import React from "react";


export const generateMetadata = async ({ params }) => {
    const { slug } = await params;

    // Fetch blog data based on slug
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog/${slug}`, {

        cache: "no-store",
    });
    const data = await res.json();
    const post = data.blog;


    if (!res.ok || !post) {
        return {
            title: "Blog Not Found | Kraviona",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt,
            url: `https://kraviona.vercel.app/blog/${post.slug}`,
            type: "article",
            images: [
                {
                    url: post.ogImage
                        ? `https://kraviona.vercel.app${post.ogImage}`
                        : "https://kraviona.vercel.app/og-images/kraviona-default.jpg",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle || post.title,
            description: post.metaDescription || post.excerpt,
            images: [
                post.ogImage
                    ? `https://kraviona.vercel.app${post.ogImage}`
                    : "https://kraviona.vercel.app/og-images/kraviona-default.jpg",
            ],
        },
    };

}

const page = async ({ params }) => {
    const { slug } = await params


    return <div>
        <SingleBlog slug={slug} />
    </div>
}

export default page 