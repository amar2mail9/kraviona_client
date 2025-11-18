"use client";
import { motion } from "framer-motion";
import { Sparkles, Code, Monitor, Rocket } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      title: "Discover",
      desc: "We start by deeply understanding your business goals, target audience, and challenges to create a clear strategy.",
      icon: <Sparkles className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "Design",
      desc: "We craft elegant, user-friendly, and responsive interfaces that enhance the user experience and brand identity.",
      icon: <Monitor className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "Develop",
      desc: "We transform designs into fully functional, scalable, and optimized web solutions using modern technologies.",
      icon: <Code className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "Deliver",
      desc: "We deploy, test, and provide continuous support to ensure smooth performance and long-term reliability.",
      icon: <Rocket className="w-10 h-10 text-emerald-500" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-100/70 blur-3xl rounded-full -translate-x-40 -translate-y-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/70 blur-3xl rounded-full translate-x-40 translate-y-40 -z-10"></div>

      {/* 🔹 Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
          Our Approach
        </span>
      </motion.h2>

      {/* 🔹 Steps */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 30px rgba(0, 203, 169, 0.25)"
            }}
            className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 text-center"
          >
            <div className="mb-5 flex justify-center">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-emerald-500 transition">
              {step.title}
            </h3>
            <p className="text-gray-600 transition leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;