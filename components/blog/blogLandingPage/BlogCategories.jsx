"use client";

import React, { useState, useEffect } from "react"; // Added useEffect to import
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants (Kept the same)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

const BlogCategories = () => {
    // 1. Ensure categories is always an array to prevent .map() crashes
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(true); // Start loading as true
    const [error, setError] = useState(null); // Add error state

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/public/blog-categories`,
                { cache: "no-store" }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch categories");
            }

            const data = await response.json();
            console.log(data);


            // 2. SAFETY CHECK: Ensure we are setting an array. 
            // If data.data is undefined, fallback to empty array [].
            setCategory(Array.isArray(data.
                categories
            ) ? data.
                categories
                : []);

        } catch (error) {
            console.error("Error fetching categories:", error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    console.log(categories);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                    📚 Browse by Category
                </h2>

                {/* 3. BETTER LOADING STATE */}
                {loading && (
                    <div className="text-center text-white py-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="inline-block w-8 h-8 border-4 border-white/30 border-t-white rounded-full"
                        />
                        <p className="mt-2 text-sm text-gray-400">Loading categories...</p>
                    </div>
                )}

                {/* 4. ERROR STATE */}
                {!loading && error && (
                    <div className="text-center text-red-400 py-10">
                        Unable to load categories at the moment.
                    </div>
                )}

                {!loading && !error && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    >
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <motion.div variants={itemVariants} key={category.slug || category._id}>
                                    <Link
                                        href={`/blog/category/${category.slug}`}
                                        className="relative block w-full h-48 overflow-hidden rounded-lg shadow-lg group bg-gray-800"
                                    >
                                        {/* IMAGE: Added fallback if thumbnail is missing */}
                                        <img
                                            src={category.imageUrl
                                                || "/placeholder.jpg"}
                                            alt={category.name}
                                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4">
                                            <h3 className="text-xl font-semibold text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-400">
                                No categories found.
                            </p>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogCategories;