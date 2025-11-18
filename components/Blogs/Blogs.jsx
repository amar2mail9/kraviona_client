"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CardPopularBlog } from "../blog/blogLandingPage/Popular";
import { blogs } from "@/Data/changableData";
// import Image from "next/image";

// --- MOCK DATA ---


// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};



// --- MAIN PAGE COMPONENT ---
const AllBlogsPage = () => {
    return (
        <section className="w-full bg-gray-900 min-h-screen py-16 md:py-24">
            <div className="max-w-8xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                    📰 All Blog Posts
                </h2>

                {/* Blog Post Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {blogs.map((blog, index) => (
                        <CardPopularBlog blog={blog} key={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AllBlogsPage;