"use client";

import React from "react";
import { blogs } from "@/Data/changableData";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, CalendarDays } from "lucide-react";

// 🌟 Main Component
export const PopularBlog = () => {
    const popularBlogs = blogs
        .filter((blog) => blog.views && blog.views > 0)
        .sort((a, b) => b.views - a.views);

    return (
        <section className="w-full py-16 ">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-2">
                    🔥 Popular Blogs
                    <span className="h-[2px] flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {popularBlogs.slice(0, 6).map((blog, index) => (
                        <CardPopularBlog blog={blog} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};



// 🌑 Modern Card Component
export const CardPopularBlog = ({ blog }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }} // Scale ko wrapper par se hata diya
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden 
                       bg-slate-900 border border-slate-800 
                       hover:border-blue-500/50 shadow-lg hover:shadow-2xl 
                       hover:shadow-blue-900/50 transition-all duration-300"
        >
            {/* Image with Gradient Overlay */}
            <div className="relative w-full h-56 overflow-hidden">
                <img
                    src={blog.featured_image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600/90 px-3 py-1 rounded-full 
                            text-xs text-white backdrop-blur-sm 
                            group-hover:bg-blue-500 transition-all duration-300">
                    {blog.category}
                </div>
            </div>


            <div className="p-5 flex flex-col flex-1">
                {/* Title and Summary Wrapper */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 
                                 group-hover:text-blue-400 transition-colors">
                        {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {blog.summary}
                    </p>
                </div>

                {/* Views + Date (Pushed to bottom) */}
                <div className="flex items-center justify-between text-gray-500 text-sm mt-auto pt-5">
                    <div className="flex items-center gap-2">
                        <Eye size={16} className="text-gray-400" />
                        <span>{blog.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            {/* Footer – Author + Link */}
            <div className="flex items-center gap-3 px-5 py-4 border-t border-slate-800 
                        bg-slate-900/80 backdrop-blur-sm">
                <img
                    src={blog.user.profile_pic}
                    alt={blog.user.username}
                    loading="lazy"
                    className="rounded-full w-10 h-10 object-cover ring-2 ring-slate-700 
                               group-hover:ring-blue-500 transition-all duration-300"
                />
                <div>
                    <h4 className="text-sm font-medium text-gray-200">
                        {blog.user.first_name} {blog.user.last_name}
                    </h4>
                    <p className="text-xs text-gray-500">{blog.user.role}</p>
                </div>

                {/* Read More link with animated arrow */}
                <Link
                    href={`/blog/${blog.slug}`}
                    className="ml-auto text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1"
                >
                    Read More
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        →
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};