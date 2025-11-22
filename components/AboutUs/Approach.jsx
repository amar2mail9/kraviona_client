"use client";
import { motion } from "framer-motion";
import { Sparkles, Code, Monitor, Rocket, Workflow } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      title: "Discover",
      desc: "We dive deep into your business goals and audience to build a strategy that guarantees success.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Design",
      desc: "We craft pixel-perfect, user-centric interfaces that elevate your brand identity and engagement.",
      icon: <Monitor className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Develop",
      desc: "We transform designs into scalable, high-performance code using the latest modern technologies.",
      icon: <Code className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Deliver",
      desc: "We deploy with confidence, providing testing and support to ensure long-term reliability.",
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white text-slate-900 overflow-hidden">

      {/* 1. Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 2. Soft Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-50/50 blur-[100px] rounded-full -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Workflow className="w-3 h-3" /> Our Workflow
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            From Concept to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500">
              Digital Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-500 max-w-2xl mx-auto text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our proven process ensures transparency, efficiency, and results that exceed expectations.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-100/40 transition-all duration-300"
            >
              {/* Step Number (Background Watermark) */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-50 opacity-[0.08] group-hover:text-emerald-100 group-hover:opacity-100 transition-colors duration-300 select-none">
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Approach;