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
    { name: "Express.js", icon: <SiExpress />, color: "#333333" }, // Changed color for light bg
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "Java", icon: <FaJava />, color: "#E51F24" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative w-full flex scroll-smooth flex-col items-center justify-center overflow-hidden py-20 bg-gray-50">
      {/* Light background glows */}
      <div className="absolute w-[600px] h-[600px] bg-emerald-100/70 blur-[150px] rounded-full -top-40 -left-40 -z-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-100/70 blur-[150px] rounded-full bottom-0 right-0 -z-10"></div>

      <motion.h1
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00a7d1] mb-16 text-center tracking-wide"
      >
        Technologies We Use
      </motion.h1>

      <section
        className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 px-6 max-w-7xl"
      >
        {Technology.map((tech, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: `0px 10px 30px ${tech.color}40`, // Kept the colored shadow
              transition: { duration: 0.3 },
            }}
            className="group relative flex flex-col items-center justify-center h-40 p-6 rounded-2xl cursor-pointer 
                       bg-white border border-gray-200 
                       shadow-lg transition-all duration-300 hover:border-[#00cba9]/40"
          >
            <span
              className="text-5xl mb-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </span>
            <span className="text-gray-800 md:text-lg text-xs font-semibold tracking-wide">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Techstack;