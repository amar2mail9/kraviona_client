"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/Data/changableData";

const RecentBlogs = () => {
    // sort blogs by latest date first
    const recentBlogs = [...blogs].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    return (
        <section className="w-full py-16 bg-gray-900 text-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">
                        Recent <span className="text-emerald-500">Blogs</span>
                    </h2>
                    <Link
                        href="/blogs"
                        className="flex hover:scale-110 items-center gap-2 text-sm font-medium text-emerald-400 hover:text-blue-300 transition-all"
                    >
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentBlogs.slice(0, 6).map((blog) => (
                        <div
                            key={blog.id}
                            className="group bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-00 hover:shadow-[0_0_15px_rgba(0,102,255,0.2)] transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(blog.created_at).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>

                                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-all line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {blog.summary}
                                </p>

                                <Link
                                    href={`/blog/${blog.id}`}
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mt-2"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentBlogs;
