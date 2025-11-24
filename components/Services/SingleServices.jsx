"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaStar, FaLayerGroup, FaRocket } from "react-icons/fa";

// --- 1. SKELETON LOADER COMPONENT ---
const SingleServiceSkeleton = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-14 mb-24 px-4 sm:px-6 animate-pulse">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Header Skeleton */}
                <div className="p-8 md:p-12 text-center bg-gray-50/50">
                    <div className="h-10 md:h-12 w-3/4 mx-auto bg-gray-200 rounded-lg mb-6"></div>
                    <div className="w-32 h-1.5 bg-gray-200 mx-auto mb-8 rounded-full"></div>
                    <div className="space-y-3 max-w-3xl mx-auto">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto"></div>
                    </div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="p-8 md:p-12 space-y-12">
                    {/* Section 1 */}
                    <div>
                        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-16 bg-gray-100 rounded-xl w-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-6 h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                                    <div className="h-6 w-full bg-gray-200 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Skeleton */}
                <div className="p-10 bg-gray-100 text-center">
                    <div className="h-8 w-2/3 mx-auto bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded mb-8"></div>
                    <div className="h-14 w-48 mx-auto bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

// --- 2. MAIN COMPONENT ---
const SingleServiceUI = ({ service }) => {
    // If service data is missing, show the Skeleton instead of null
    if (!service) return <SingleServiceSkeleton />;

    const {
        serviceName,
        description,
        keyFeatures = [],
        whyChooseUs = [],
        weOffer = [],
        keyHighlights = []
    } = service;

    return (
        <div className="w-full max-w-5xl mx-auto mt-14 mb-24 px-4 sm:px-6">
            {/* --- Main Card --- */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Header Section */}
                <div className="p-8 md:p-12 text-center bg-gray-50/50">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 capitalize mb-4 tracking-tight">
                        {serviceName}
                    </h1>

                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] mx-auto mb-8 rounded-full shadow-sm"></div>

                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* --- Content Grid --- */}
                <div className="p-8 md:p-12 space-y-12">

                    {/* 1. What We Offer */}
                    {weOffer.length > 0 && (
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6">
                                <FaLayerGroup className="text-[#00a7d1]" /> What We Offer
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {weOffer.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:shadow-md transition-shadow">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-[#00a7d1] flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 2. Key Features */}
                    {keyFeatures.length > 0 && (
                        <section>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6">
                                <FaRocket className="text-[#00cba9]" /> Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {keyFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <FaCheckCircle className="text-[#00cba9] text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 text-lg leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 3. Why Choose Us */}
                    {whyChooseUs.length > 0 && (
                        <section className="bg-gradient-to-br from-[#00cba9]/10 to-[#00a7d1]/10 rounded-2xl p-8 border border-[#00cba9]/20">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-6">
                                <FaStar className="text-yellow-500" /> Why Choose Kraviona?
                            </h2>
                            <div className="space-y-4">
                                {whyChooseUs.map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                                        <p className="text-gray-700 font-medium">{reason}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* --- Footer CTA --- */}
                <div className="p-10 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to elevate your business?</h3>
                    <p className="mb-8 text-lg opacity-95 max-w-2xl mx-auto">
                        Get professional <strong>{serviceName}</strong> solutions tailored to your specific needs.
                    </p>

                    <Link href="/contact-us">
                        <button className="px-10 py-4 bg-white text-[#00a7d1] font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                            Get a Quote Now
                        </button>
                    </Link>

                    {keyHighlights.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-90 text-sm">
                            {keyHighlights.map((highlight, index) => (
                                <span key={index} className="px-3 py-1 bg-white/20 rounded-full border border-white/30">
                                    ✓ {highlight}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleServiceUI;