"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedPost = () => {
    const post = {
        id: "b001",
        title: "Revolutionizing 2025: How AI is Reshaping the Digital World",
        summary:
            "From smart automation to advanced generative models, AI is driving the next wave of innovation. Explore its impact on industries and human creativity.",
        category: "Artificial Intelligence",
        featured_image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
        created_at: "2025-10-28T10:00:00Z",
        user: {
            first_name: "Amar",
            last_name: "Kumar",
            username: "amar_dev",
            profile_pic:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&fit=max&w=400&q=80",
        },
    };

    return (
        <section className="w-full px-[8%] py-12 ">
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-[#1a1a1a] bg-[#111111] hover:border-blue-700/50 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]"
            >
                {/* Image with Overlay */}
                <div className="relative h-72 md:h-[420px] overflow-hidden">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-5 left-5 bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        {post.category}
                    </div>
                </div>

                {/* Text Overlay Box */}
                <div className="absolute bottom-6 left-6 right-6 md:left-10 md:bottom-10 md:max-w-[60%] bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                    <p className="text-blue-400 text-xs uppercase font-semibold mb-1 tracking-wider">
                        🔥 Featured Post
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3">
                        {post.summary}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center text-xs text-gray-400 mb-5">
                        <img
                            src={post.user.profile_pic}
                            alt={post.user.username}
                            className="w-6 h-6 rounded-full object-cover mr-2 border border-gray-700"
                        />
                        <span className="text-gray-300">
                            {post.user.first_name} {post.user.last_name}
                        </span>
                        <span className="mx-2 text-gray-600">•</span>
                        <Calendar className="w-3.5 h-3.5 mr-1 text-gray-500" />
                        <time dateTime={post.created_at}>
                            {new Date(post.created_at).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </time>
                    </div>

                    {/* Read Button */}
                    <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-md text-xs font-medium text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </motion.article>
        </section>
    );
};

export default FeaturedPost;
