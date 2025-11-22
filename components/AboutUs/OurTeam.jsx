"use client";
import { motion } from "framer-motion";
import { Users, Linkedin, Twitter, Github } from "lucide-react";

const OurTeam = () => {
  const members = [
    {
      name: "Amar Kumar",
      role: "Founder & Developer",
      // Using a professional placeholder. Replace with Amar's real photo.
      img: "/amar_profile.jpg",
    },
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "John Smith",
      role: "Backend Developer",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 text-slate-900 overflow-hidden">

      {/* 1. Modern Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-50/50 blur-[100px] rounded-full -z-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Users className="w-3 h-3" /> Meet The Experts
          </motion.div>

          <motion.h2
            className="text-4xl font-extrabold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-500">Kraviona</span>
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-100/40 hover:border-emerald-200 transition-all duration-300"
            >
              {/* Image Container with Gradient Ring */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 rounded-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 rounded-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                  <Github size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;