"use client";
import { motion } from "framer-motion";

const OurTeam = () => {
  const members = [
    {
      name: "Amar Kumar",
      role: "Founder & Developer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
    {
      name: "John Smith",
      role: "Backend Developer",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-24 px-6 text-gray-900 overflow-hidden">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-100/70 blur-3xl rounded-full -translate-x-40 -translate-y-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/70 blur-3xl rounded-full translate-x-40 translate-y-40 -z-10"></div>

      <motion.h2
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Team
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 30px rgba(0, 203, 169, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-emerald-500 shadow-lg mb-5 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-emerald-500 font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;