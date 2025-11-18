"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image"; // Kept commented as in your original

const categories = [
    {
        name: "Web Development",
        slug: "web-development",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    },
    {
        name: "JavaScript",
        slug: "javascript",
        thumbnail:
            "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
        name: "React",
        slug: "react",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Node.js",
        slug: "nodejs",
        thumbnail:
            "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
    },
];

// Animation variants for the container (grid) and items (cards)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // Stagger the animation of child elements
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

const BlogCategories = () => {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                    📚 Browse by Category
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {categories.map((category) => (
                        // Each card is now a motion item with its own variant
                        <motion.div variants={itemVariants} key={category.slug}>
                            <Link
                                href={`/blog/category/${category.slug}`}
                                className="relative block w-full h-48 overflow-hidden rounded-lg shadow-lg group"
                            >
                                {/* IMAGE */}
                                <img
                                    src={category.thumbnail}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />

                                {/* HOVER OVERLAY: Darkens the card on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* GRADIENT: Ensures text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                {/* TEXT CONTENT */}
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-xl font-semibold text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BlogCategories;