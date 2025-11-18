"use client";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section className="w-full h-[50vh] md:h-[500px] relative overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="/contact.jpg"
        alt="Contact Us"
        className="w-full h-full object-cover brightness-90"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/90" />

      {/* ==== Subtle Floating Lights (Responsive) ==== */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-emerald-100/50 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-purple-100/50 rounded-full blur-3xl"
      />

      {/* Centered Content */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center px-4 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00a7d1] drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg md:text-xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.15)]">
            Have a project in mind or just want to say hello? Reach out to
            us — we’d love to collaborate and make your ideas come alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner;