"use client";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[420px] overflow-hidden"> {/* Responsive height */}
      {/* ==== Background Image with Subtle Motion ==== */}
      <motion.img
        src="./about1.jpeg" // Ensure this image works well in a lighter context
        alt="About Kraviona"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="w-full h-full object-cover brightness-90" // Simplified for a cleaner look
      />

      {/* ==== Light Overlay ==== */}
      <div className="absolute inset-0 bg-white/90"></div> {/* Stronger overlay */}

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

      {/* ==== Centered Content ==== */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#00a7d1] drop-shadow-sm">
            About Kraviona
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.15)]"> {/* Removed box, added shadow */}
            At <span className="text-emerald-600 font-semibold">Kraviona</span>,
            we craft modern web experiences that merge innovation, design, and
            technology. Our passionate team transforms ideas into engaging,
            high-performance digital realities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsBanner;