"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gray-50 text-center overflow-hidden px-6">
      {/* ====== Floating Gradient Lights ====== */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-150px] right-[-250px] w-[700px] h-[700px] bg-cyan-100/50 rounded-full blur-3xl -z-10"
      />

      {/* ====== Animated Heading ====== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ideas</span>
          <br /> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Digital Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          We design and build immersive web experiences that inspire, perform, and grow your digital presence with creativity and precision.
        </motion.p>

        {/* ====== Animated Button ====== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <button className="group flex items-center gap-2 px-8 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300">
            Explore Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>

      {/* ====== Decorative Wave (Fills with white to transition to white content) ====== */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full h-auto"
        >
          <path
            fill="white" // Fills with white, assumes next section is white
            fillOpacity="1"
            d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,218.7C672,235,768,213,864,197.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          {/* Removed the <defs> and gradient fill */}
        </motion.svg>
      </div>
    </section>
  );
};

export default Banner;