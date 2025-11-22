"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

// --- MAIN COMPONENT ---
const AllBlogsPage = () => {
    // 1. STATE
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; // 🎯 LIMIT SET TO 20

    // 2. FETCH DATA
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_API}/public-blogs`,
                    { cache: "no-store" }
                );
                const data = await response.json();
                setBlogs(data.blogs || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // 3. PAGINATION LOGIC
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(blogs.length / itemsPerPage);

    // Scroll to top when page changes
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-gray-50 min-h-screen py-16 md:py-24">
            <div className="max-w-8xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        📰 All Blog Posts
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, blogs.length)} of {blogs.length} articles
                    </p>
                    <div className="h-1 w-24 bg-emerald-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* 4. CONTENT GRID */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {[...Array(8)].map((_, i) => <AllBlogSkeleton key={i} />)}
                    </div>
                ) : (
                    <>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            // Key forces re-animation on page change
                            key={currentPage}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                        >
                            {currentBlogs.length > 0 ? (
                                currentBlogs.map((blog, index) => (
                                    <motion.div
                                        key={blog._id || index}
                                        variants={cardVariants}
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
                                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                {blog.category || "General"}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                                                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                                <span>
                                                    {new Date(blog.createdAt || blog.created_at).toLocaleDateString()}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2">
                                                <Link href={`/blog/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                        <User size={12} />
                                                    </div>
                                                    <span className="text-xs text-gray-500 font-medium">
                                                        {blog.author.name || "Admin"}
                                                    </span>
                                                </div>

                                                <Link
                                                    href={`/blog/${blog.slug}`}
                                                    className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-all"
                                                >
                                                    Read <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-500 py-10">
                                    No blogs found on this page.
                                </div>
                            )}
                        </motion.div>

                        {/* 5. PAGINATION CONTROLS */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-16">
                                {/* Prev Button */}
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* Page Numbers */}
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => paginate(i + 1)}
                                        className={`w-10 h-10 rounded-lg border font-bold text-sm transition-all
                                            ${currentPage === i + 1
                                                ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200"
                                                : "bg-white border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-600"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                {/* Next Button */}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-emerald-500 hover:text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

// 💀 SKELETON
const AllBlogSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-[380px] shadow-sm animate-pulse">
            <div className="h-48 bg-gray-200 w-full" />
            <div className="p-5 space-y-4">
                <div className="h-3 w-24 bg-gray-200 rounded" />
                <div className="space-y-2">
                    <div className="h-6 w-full bg-gray-200 rounded" />
                    <div className="h-6 w-2/3 bg-gray-200 rounded" />
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div className="h-6 w-6 rounded-full bg-gray-200" />
                        <div className="h-3 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="h-4 w-12 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
};

export default AllBlogsPage;