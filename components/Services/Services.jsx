"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaCloud,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      slug: "web-development", // Added slug
      desc: "Building fast, responsive, and modern websites using React, Next.js, and MERN Stack.",
      icon: <FaCode />,
      color: "#00cba9",
    },
    {
      title: "Backend Development",
      slug: "backend-development", // Added slug
      desc: "Secure and scalable REST APIs built with Node.js, Express, and MongoDB for powerful apps.",
      icon: <FaServer />,
      color: "#4DB33D",
    },
    {
      title: "App Development",
      slug: "app-development", // Added slug
      desc: "Modern cross-platform mobile applications using React Native and Flutter.",
      icon: <FaMobileAlt />,
      color: "#00d5ff",
    },
    {
      title: "SEO Optimization",
      slug: "seo-optimization", // Added slug
      desc: "Improve your site’s visibility with advanced SEO strategies, analytics, and Google optimization.",
      icon: <FaSearch />,
      color: "#FFD700",
    },
    {
      title: "Cloud Deployment",
      slug: "cloud-deployment", // Added slug
      desc: "Fast and reliable hosting with AWS, Vercel, and Render — optimized for performance.",
      icon: <FaCloud />,
      color: "#00bfff",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design", // Added slug
      desc: "Clean, engaging, and interactive user interfaces that provide a stunning digital experience.",
      icon: <FaPalette />,
      color: "#ff4db8",
    },
  ];

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    },
  };

  return (
    <div className="relative w-full bg-white py-24 overflow-hidden">
      {/* Modern Dot Pattern Background (Same as Techstack for consistency) */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* 🟢 Banner Section */}
      <section className="relative z-10 text-center max-w-3xl mx-auto px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00a7d1]">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 mt-4 text-lg leading-relaxed"
        >
          We offer cutting-edge development and design services that bring your
          digital ideas to life — fast, elegant, and reliable.
        </motion.p>
      </section>

      {/* 🔷 Services Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto"
      >
        {services.map((srv, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link href={`/services/${srv.slug}`} className="block h-full">
              <div
                className="group relative flex flex-col h-full p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Border Gradient Effect */}
                <div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl transition-colors duration-300"
                  style={{ borderColor: 'transparent' }} // Default state
                />
                {/* Use CSS variable for hover color to avoid inline style complexity or use simpler approach below */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 rounded-3xl"
                  style={{ borderColor: srv.color }}
                />

                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ backgroundColor: `${srv.color}15`, color: srv.color }}
                >
                  {srv.icon}
                </div>

                {/* Text Content */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00cba9] transition-colors duration-300">
                  {srv.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                  {srv.desc}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-sm font-bold transition-colors duration-300" style={{ color: srv.color }}>
                  Learn more
                  <FaArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Services;