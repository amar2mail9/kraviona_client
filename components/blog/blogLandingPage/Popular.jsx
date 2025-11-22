"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, CalendarDays, User } from "lucide-react";

// 🛠 Helper: Strip HTML tags for summary preview
const getSummary = (htmlContent, length = 100) => {
    if (!htmlContent) return "";
    const plainText = htmlContent.replace(/<[^>]+>/g, "");
    return plainText.length > length ? plainText.substring(0, length) + "..." : plainText;
};

// 🌟 Main Component (Light Theme)
export const PopularBlog = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_API}/public-blogs`,
                    { cache: "no-store" }
                );
                const data = await response.json();
                const blogsSorted = data.blogs.sort((a, b) => b.view - a.view);
                data.blogs = blogsSorted;
                setPopularBlogs(data.blogs);
            } catch (error) {
                console.error("Error fetching popular blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularBlogs();
    }, []);


    return (
        // ☀️ Background: Very light gray (gray-50) so white cards pop
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header: Dark text for light mode */}
                <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-2">
                    🔥 Popular Blogs
                    <span className="h-[2px] flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {loading ? (
                        [...Array(6)].map((_, index) => <BlogSkeletonLight key={index} />)
                    ) : (
                        popularBlogs.slice(0, 6).map((blog, index) => (
                            <CardPopularBlogLight blog={blog} key={index} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

// ☀️ Modern Card Component (Light Theme)
export const CardPopularBlogLight = ({ blog }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden 
                       bg-white border border-gray-200 
                       hover:border-blue-400 shadow-sm hover:shadow-xl hover:shadow-blue-100
                       transition-all duration-300"
        >
            {/* Image Wrapper */}
            <div className="relative w-full h-56 overflow-hidden">
                <img
                    src={blog.featuredImage || blog.featured_image || "https://via.placeholder.com/400x300"}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient: Subtler dark gradient for text legibility on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Category Badge: White text, blurry background */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full 
                            text-xs font-bold text-blue-700 shadow-sm
                            group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {blog.category || "General"}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                {/* Title and Summary */}
                <div>
                    {/* Title: Dark Slate */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 
                                 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                    </h3>
                    {/* Summary: Mid Gray */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {blog.summary || getSummary(blog.content)}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex items-center justify-between text-gray-500 text-sm mt-auto pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <Eye size={16} className="text-blue-500" />
                        <span>{blog.view || 0} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-blue-500" />
                        <span>{new Date(blog.createdAt || blog.created_at || Date.now()).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            {/* Footer – Author + Link */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gray-50/80 border-t border-gray-200 backdrop-blur-sm">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                    {blog.user?.profile_pic ? (
                        <img
                            src={blog.user.profile_pic}
                            alt="User"
                            className="rounded-full w-8 h-8 object-cover border border-gray-300"
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <User size={16} />
                        </div>
                    )}

                    <div>
                        <h4 className="text-sm font-bold text-slate-800">
                            {blog.user?.first_name || blog.author?.name || "Admin"}
                        </h4>
                    </div>
                </div>

                {/* Read More Link */}
                <Link
                    href={`/blog/${blog.slug}`}
                    className="ml-auto text-sm text-slate-900 font-semibold hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                    Read More
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-blue-500">
                        →
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};

// 💀 Light Theme Skeleton
const BlogSkeletonLight = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-[450px] shadow-sm animate-pulse">
            <div className="h-56 bg-gray-200 w-full" />
            <div className="p-5 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
            <div className="p-5 mt-auto border-t border-gray-100 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div className="h-4 w-20 bg-gray-200 rounded my-auto" />
                </div>
                <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>
        </div>
    );
};