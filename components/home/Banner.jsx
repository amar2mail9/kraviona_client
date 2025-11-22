"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-white text-center overflow-hidden px-6 pt-20">

      {/* ====== 1. Modern Grid Background ====== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* ====== 2. Floating Ambient Glows (Refined) ====== */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-cyan-200/40 rounded-full blur-[100px] -z-10"
      />

      {/* ====== Main Content ====== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >

        {/* Modern "Pill" Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Kraviona Digital Agency
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight"
        >
          Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">Ideas</span>
          <br /> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600">Digital Reality</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          We design and build immersive web experiences that inspire, perform, and grow your business with creativity and precision.
        </motion.p>

        {/* ====== Action Buttons ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <Link href={'/blog'}>
            <button className="group relative px-8 py-4 rounded-full bg-slate-900 text-white text-lg font-medium shadow-xl shadow-slate-900/20 hover:bg-emerald-600 hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Explore Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button></Link>

          {/* Secondary Button */}
          <button className="group px-8 py-4 rounded-full bg-white text-slate-700 text-lg font-medium border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <Play className="w-4 h-4 fill-current text-emerald-600" />
            View Our Work
          </button>
        </motion.div>

      </motion.div>

      {/* ====== 3. Modern Bottom Fade (Better than Wave SVG) ====== */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Banner;