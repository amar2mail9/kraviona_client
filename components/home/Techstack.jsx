"use client";
import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io5";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

const Techstack = () => {
  const Technology = [
    { name: "HTML", icon: <IoLogoHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <IoLogoCss3 />, color: "#264DE4" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <IoLogoNodejs />, color: "#3C873A" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Java", icon: <FaJava />, color: "#E51F24" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  ];

  // Animation Variants for Container (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Cards ek ke baad ek aayenge
      },
    },
  };

  // Animation for individual cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="relative w-full py-24 overflow-hidden bg-white">
      {/* Modern Dot Pattern Background */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Our stack is built for speed, scalability, and modern web standards.
          </motion.p>
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {Technology.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default overflow-hidden"
            >
              {/* Hover Gradient Glow - specific to tech color */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
              />

              {/* Icon Container */}
              <div
                className="relative z-10 text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                style={{ color: tech.color }} // Using inline style for color
              >
                {tech.icon}
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-gray-700 font-medium text-sm md:text-base tracking-wide group-hover:text-gray-900">
                {tech.name}
              </h3>

              {/* Bottom line indicator */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: tech.color }}
              />
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Techstack;