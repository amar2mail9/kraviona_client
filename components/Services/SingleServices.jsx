"use client";

import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const SingleServices = ({ slug }) => {
    const serviceName = slug.replace(/-/g, " ");

    return (
        <div className="w-full max-w-4xl mx-auto mt-14 mb-24 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">

            {/* Header */}
            <h1 className="text-4xl font-extrabold text-gray-900 capitalize text-center mb-4">
                {serviceName}
            </h1>

            {/* Underline Accent */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] mx-auto mb-8 rounded-full"></div>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg text-center leading-relaxed mb-12 max-w-2xl mx-auto">
                Learn everything about our
                <span className="font-semibold text-[#00cba9]"> {serviceName} </span>
                service — features, benefits, pricing, and more.
            </p>

            {/* What We Offer */}
            <section className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    What We Offer
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Our <span className="font-medium capitalize">{serviceName}</span> service is designed using
                    modern tools, industry best practices, and an optimized workflow to deliver
                    exceptional performance and quality.
                </p>
            </section>

            {/* Features */}
            <section className="p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200 mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Key Features
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        "High performance and reliability",
                        "Modern technologies with optimized results",
                        "Smooth and scalable architecture",
                        "User-friendly and visually stunning designs",
                        "Fast delivery with premium quality",
                        "Professional development standards"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <FaCheckCircle className="text-[#00cba9] text-lg" />
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Highlight Box */}
            <section className="mt-6 p-6 rounded-xl border border-[#00cba9]/30 bg-[#00cba9]/5 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
                <p className="text-gray-600 leading-relaxed">
                    We follow a premium and professional development approach ensuring
                    reliability, transparency, and the best customer experience.
                </p>
            </section>

            {/* CTA */}
            <div className="p-8 mt-10 bg-gradient-to-r from-[#00cba9] to-[#00a7d1] rounded-xl shadow-lg text-white text-center">
                <h3 className="text-3xl font-semibold mb-3">Ready to Get Started?</h3>
                <p className="mb-6 text-lg opacity-90">Let’s build something amazing together!</p>

                <Link href="/contact-us">
                    <button className="px-8 py-3 bg-white text-[#00a7d1] font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        Contact Us
                    </button>
                </Link>
            </div>

        </div>
    );
};
