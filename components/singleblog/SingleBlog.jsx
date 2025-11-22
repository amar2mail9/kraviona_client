"use client";
import React, { useEffect, useState } from "react";
import { PreviewBlog } from "./PreviewBlog";
import CommentsOnBlog from "../comments/CommentsOnBlog"; // Ensure path is correct
import RecommendedPost from "../RecommendPost/RecommendedPost"; // Ensure path is correct
import { PopularBlog } from "../blog/blogLandingPage/Popular"; // Ensure path is correct
import { FaCloud, FaCode, FaMobileAlt, FaPalette, FaSearch, FaServer } from "react-icons/fa";
import { ArrowBigRightDash } from "lucide-react";
import Link from "next/link";

export const SingleBlog = ({ slug }) => {
    // Added 'slug' to services so links work
    const services = [
        {
            title: "Web Development",
            slug: "web-development",
            desc: "Building fast, responsive, and modern websites using React, Next.js, and MERN Stack.",
            icon: <FaCode />,
            color: "#00cba9",
        },
        {
            title: "Backend Development",
            slug: "backend-development",
            desc: "Secure and scalable REST APIs built with Node.js, Express, and MongoDB.",
            icon: <FaServer />,
            color: "#4DB33D",
        },
        {
            title: "App Development",
            slug: "app-development",
            desc: "Modern cross-platform mobile applications using React Native and Flutter.",
            icon: <FaMobileAlt />,
            color: "#00d5ff",
        },
        {
            title: "SEO Optimization",
            slug: "seo-optimization",
            desc: "Improve your site’s visibility with advanced SEO strategies.",
            icon: <FaSearch />,
            color: "#FFD700",
        },
        {
            title: "Cloud Deployment",
            slug: "cloud-deployment",
            desc: "Fast and reliable hosting with AWS, Vercel, and Render.",
            icon: <FaCloud />,
            color: "#00bfff",
        },
        {
            title: "UI/UX Design",
            slug: "ui-ux-design",
            desc: "Clean, engaging, and interactive user interfaces.",
            icon: <FaPalette />,
            color: "#ff4db8",
        },
    ];

    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Start loading true

    const fetchBlogData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/blog/${slug}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch blog data");
            }

            // Depending on your API structure, data might be directly the blog or data.blog
            setBlog(data.blog || data);

        } catch (error) {
            console.error("Error fetching blog:", error.message);
            setBlog(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchBlogData();
        }
    }, [slug]);

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            {/* Main Blog Content */}
            <PreviewBlog isLoading={isLoading} blog={blog} />

            <div className="max-w-4xl mx-auto mt-10 space-y-10">
                {/* Comments Section */}
                <CommentsOnBlog blogId={blog?._id} />

                {/* Recommendations */}
                <RecommendedPost currentCategory={blog?.category} />
            </div>

            {/* Explore Services */}
            <div className="mt-20 w-full px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Explore Our Services
                </h2>

                <div className="grid grid-cols-1 max-w-5xl mx-auto my-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link href={`/services/${service.slug}`} key={index} className="block h-full">
                            <div
                                className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white border border-gray-200 hover:-translate-y-1"
                                style={{ borderTop: `4px solid ${service.color}` }}
                            >
                                <div className="text-4xl mb-4" style={{ color: service.color }}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Blogs Footer Area */}
            <div className="mt-16">
                <div className="bg-gray-800 py-10">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-white text-2xl font-bold mb-6">Popular Reads</h3>
                        <PopularBlog />
                    </div>
                </div>

                <div className="w-full flex justify-center py-10">
                    <Link href="/blogs">
                        <button
                            className="px-6 py-3 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] 
                            text-white rounded-full shadow-lg flex items-center gap-2 cursor-pointer
                            hover:shadow-2xl transition-all duration-300 ease-out 
                            hover:from-[#00b89e] hover:to-[#0095bb] hover:scale-105 active:scale-95"
                        >
                            View More Blogs <ArrowBigRightDash size={22} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};