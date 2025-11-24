"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaCloud,
  FaPalette,
  FaArrowRight,
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";

// --- 1. CONFIGURATION ---
const serviceStyles = {
  "full-stack-web-development": { icon: <FaCode />, color: "#00cba9" },
  "backend-architecture-apis": { icon: <FaServer />, color: "#4DB33D" },
  "app-development": { icon: <FaMobileAlt />, color: "#00d5ff" },
  "seo-optimization": { icon: <FaSearch />, color: "#FFD700" },
  "cloud-deployment": { icon: <FaCloud />, color: "#00bfff" },
  "ui-ux-design": { icon: <FaPalette />, color: "#ff4db8" },
  "default": { icon: <FaLayerGroup />, color: "#6b7280" }
};

// --- 2. SKELETON LOADER COMPONENT ---
// This mimics the exact shape of your service card
const ServiceSkeleton = () => {
  return (
    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm h-full animate-pulse">
      {/* Icon Placeholder */}
      <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-6"></div>

      {/* Title Placeholder */}
      <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>

      {/* Description Placeholder (3 lines) */}
      <div className="space-y-3 mb-8">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-11/12"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>

      {/* Link Placeholder */}
      <div className="h-5 bg-gray-200 rounded w-24"></div>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Simulating a slight delay so you can actually see the skeleton (Optional: Remove setTimeout in production)
        // await new Promise(resolve => setTimeout(resolve, 1000)); 

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/services`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="relative w-full bg-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Header Section */}
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
          digital ideas to life.
        </motion.p>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {loading ? (
          /* --- LOADING STATE: SKELETON GRID --- */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Create an array of 6 dummy items to render 6 skeletons */}
            {[...Array(6)].map((_, index) => (
              <ServiceSkeleton key={index} />
            ))}
          </div>
        ) : (
          /* --- SUCCESS STATE: REAL DATA --- */
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((srv, index) => {
              const style = serviceStyles[srv.slug] || serviceStyles["default"];

              return (
                <motion.div key={srv._id || index} variants={itemVariants}>
                  <Link href={`/services/${srv.slug}`} className="block h-full">
                    <div className="group relative flex flex-col h-full p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

                      {/* Gradient Borders on Hover */}
                      <div className="absolute inset-0 border-2 border-transparent rounded-3xl" />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 rounded-3xl"
                        style={{ borderColor: style.color }}
                      />

                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                        style={{ backgroundColor: `${style.color}15`, color: style.color }}
                      >
                        {style.icon}
                      </div>

                      {/* Content */}
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#00cba9] transition-colors duration-300">
                        {srv.serviceName}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                        {srv.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center text-sm font-bold transition-colors duration-300" style={{ color: style.color }}>
                        Learn more
                        <FaArrowRight className="ml-2 w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Services;