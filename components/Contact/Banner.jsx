"use client";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-white px-6">

      {/* 1. Modern Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 2. Floating Ambient Glows (Emerald & Cyan) */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[100px] -z-10"
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
          <Mail className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-bold text-emerald-800 tracking-wide uppercase">
            We'd love to hear from you
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
          Let’s Start a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">
            Conversation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Reach out to
          us — we’d love to collaborate and make your ideas come alive.
        </p>

      </motion.div>

      {/* 4. Bottom Fade for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ContactBanner;