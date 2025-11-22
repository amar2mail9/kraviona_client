"use client";

import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// 🛠 Helper: Strip HTML tags
const getSummary = (htmlContent, length = 100) => {
    if (!htmlContent) return "";
    const plainText = htmlContent.replace(/<[^>]+>/g, "");
    return plainText.length > length ? plainText.substring(0, length) + "..." : plainText;
};

const RecentBlogs = () => {
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_API}/public-blogs`,
                    { cache: "no-store" }
                );
                const data = await response.json();

                const sorted = (data.blogs || []).sort(
                    (a, b) => new Date(b.createdAt || b.created_at) - new Date(a.createdAt || a.created_at)
                );
                setRecentBlogs(sorted);
            } catch (error) {
                console.error("Error fetching recent blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        // ☀️ Section BG: Light Gray (gray-50)
        <section className="w-full py-16 bg-gray-50 text-gray-900">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Recent <span className="text-emerald-600">Blogs</span>
                    </h2>
                    <Link
                        href="/blogs"
                        className="flex hover:scale-105 items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-all"
                    >
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        [...Array(3)].map((_, i) => <RecentBlogSkeletonLight key={i} />)
                    ) : (
                        recentBlogs.slice(0, 6).map((blog, index) => (
                            <div
                                key={blog._id || index}
                                // ☀️ Card: White BG, Light Border, Soft Shadow
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 
                                           hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100 
                                           transition-all duration-300 flex flex-col h-full shadow-sm"
                            >
                                {/* Image */}
                                <div className="overflow-hidden h-48 w-full relative">
                                    <img
                                        src={blog.featuredImage || blog.featured_image || "/placeholder.jpg"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Badge: White glass effect */}
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-2 py-1 rounded shadow-sm">
                                        {blog.category || "General"}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                        <Calendar className="w-4 h-4 text-emerald-600" />
                                        <span>
                                            {new Date(blog.createdAt || blog.created_at).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>

                                    {/* Title: Dark Text */}
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
                                        <Link href={`/blog/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    {/* Summary: Medium Gray Text */}
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                        {blog.summary || getSummary(blog.content)}
                                    </p>

                                    {/* Link */}
                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 text-sm font-bold mt-auto"
                                    >
                                        Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

// 💀 Light Theme Skeleton
const RecentBlogSkeletonLight = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-[400px] shadow-sm animate-pulse">
            <div className="h-48 bg-gray-200 w-full" />
            <div className="p-6 space-y-4">
                <div className="flex gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded" />
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                </div>
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-2/3 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded mt-4" />
            </div>
        </div>
    );
};

export default RecentBlogs;