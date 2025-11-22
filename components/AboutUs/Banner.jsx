"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const AboutUsBanner = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[450px] flex items-center justify-center overflow-hidden bg-white px-6">

      {/* 1. Modern Tech Grid Background (Replaces heavy image) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 2. Floating Ambient Glows (Emerald & Cyan - Consistent with Brand) */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[300px] h-[300px] bg-emerald-200/40 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[100px] -z-10"
      />

      {/* 3. Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-6"
        >
          <Users className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
            Who We Are
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">Kraviona</span>
        </h1>

        {/* Description */}
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We craft modern web experiences that merge <span className="font-semibold text-slate-700">innovation</span>, <span className="font-semibold text-slate-700">design</span>, and <span className="font-semibold text-slate-700">technology</span>.
          Our passionate team transforms ideas into engaging, high-performance digital realities.
        </p>
      </motion.div>

      {/* 4. Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutUsBanner;