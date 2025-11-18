"use client";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviews = [
    { name: "Alice", feedback: "Amazing work! Highly recommended." },
    { name: "Bob", feedback: "Professional and timely delivery." },
    { name: "Charlie", feedback: "Creative solutions and excellent support." },
  ];

  return (
    <section className="relative bg-gray-50 py-24 px-6 text-gray-900 overflow-hidden">
      {/* 🔹 Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-100/70 blur-3xl rounded-full translate-x-40 -translate-y-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/70 blur-3xl rounded-full -translate-x-40 translate-y-40 -z-10"></div>

      <motion.h2
        className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-10 z-10 relative">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // This transition applies to the whileInView animation
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 30px rgba(0, 203, 169, 0.25)",
              // The transition for hover now lives inside whileHover
              transition: { duration: 0.3 }
            }}
          >
            <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
              “{review.feedback}”
            </p>
            <h4 className="text-emerald-500 font-semibold text-xl">
              {review.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;