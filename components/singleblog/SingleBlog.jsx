"use client";
import React from "react";
import { PreviewBlog } from "./PreviewBlog";
import CommentsOnBlog from "../comments/CommentsOnBlog";
import RecommendedPost from "../RecommendPost/RecommendedPost";
import { FaCloud, FaCode, FaMobileAlt, FaPalette, FaSearch, FaServer } from "react-icons/fa";
import { PopularBlog } from "../blog/blogLandingPage/Popular";
import { ArrowBigDown, ArrowBigLeft, ArrowBigRightDash } from "lucide-react";
import Link from "next/link";

export const SingleBlog = ({ slug }) => {
    const services = [
        {
            title: "Web Development",
            desc: "Building fast, responsive, and modern websites using React, Next.js, and MERN Stack.",
            icon: <FaCode />,
            color: "#00cba9",
        },
        {
            title: "Backend Development",
            desc: "Secure and scalable REST APIs built with Node.js, Express, and MongoDB for powerful server-side apps.",
            icon: <FaServer />,
            color: "#4DB33D",
        },
        {
            title: "App Development",
            desc: "Modern cross-platform mobile applications using React Native and Flutter.",
            icon: <FaMobileAlt />,
            color: "#00d5ff",
        },
        {
            title: "SEO Optimization",
            desc: "Improve your site’s visibility with advanced SEO strategies, analytics, and Google optimization.",
            icon: <FaSearch />,
            color: "#FFD700",
        },
        {
            title: "Cloud Deployment",
            desc: "Fast and reliable hosting with AWS, Vercel, and Render — optimized for performance.",
            icon: <FaCloud />,
            color: "#00bfff",
        },
        {
            title: "UI/UX Design",
            desc: "Clean, engaging, and interactive user interfaces that provide a stunning digital experience.",
            icon: <FaPalette />,
            color: "#ff4db8",
        },
    ];
    let blog = {}; // Fetch or get the blog data based on slug

    const fetchBlogData = async (slug) => {
        // Placeholder function to simulate fetching blog data
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/${slug}`);
        const data = await response.json();

        return data;
    }


    return <div>
        <PreviewBlog blog={{ title: "Sample Blog Title", content: "This is a sample blog content for preview." }} />
        <CommentsOnBlog />
        <br />
        <RecommendedPost />

        {/* explore our services */}
        <div className="mt-10 w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Explore Our Services
            </h2>

            <div className="grid grid-cols-1 max-w-5xl mx-auto my-16 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Link href={`/services/${service?.slug}`} key={index}>
                        <div

                            className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-gray-200 hover:-translate-y-1"
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

        {/* More post */}
        <div>

            <div className="bg-gray-800">
                <PopularBlog />
            </div>
            {/* view more */}

            <div className="w-full flex justify-center">
                <button
                    className="mt-4 mb-10 px-6 py-3 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] 
               text-white rounded-full shadow-lg flex items-center gap-2 cursor-pointer
               hover:shadow-2xl transition-all duration-300 ease-out 
               hover:from-[#00b89e] hover:to-[#0095bb] hover:scale-105 active:scale-95"
                >
                    View More Blogs <ArrowBigRightDash size={22} />
                </button>
            </div>

        </div>
    </div>;
}