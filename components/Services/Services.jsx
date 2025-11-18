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
} from "react-icons/fa";
import Link from "next/link";


const Services = () => {

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
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-24">
      {/* Light background glows */}
      <div className="absolute w-[700px] h-[700px] bg-emerald-100/70 blur-[150px] rounded-full -top-60 -left-40 -z-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-100/70 blur-[150px] rounded-full bottom-0 right-0 -z-10"></div>

      {/* 🟢 Banner Section */}
      <section className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00a7d1]"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 mt-6 text-lg"
        >
          We offer cutting-edge development and design services that bring your
          digital ideas to life — fast, elegant, and reliable.
        </motion.p>
      </section>

      {/* 🔷 Services Grid */}
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 mt-16 max-w-7xl mx-auto">
        {services.map((srv, index) => (
          <Link href={`/services/${srv?.slug}`} key={index}>
            <motion.div

              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8, // Lifts the card up
                boxShadow: `0px 10px 30px ${srv.color}40`, // Uses the service color for shadow
              }}
              className="flex flex-col items-center text-center p-8 rounded-2xl 
                       bg-white border border-gray-200 shadow-lg
                       transition-all duration-300"
            >
              <span
                className="text-5xl mb-4 drop-shadow-lg"
                style={{ color: srv.color }}
              >
                {srv.icon}
              </span>
              <h2 className="text-xl font-semibold mb-3 text-gray-900">
                {srv.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div></Link>
        ))}
      </section>
    </div>
  );
};

export default Services;