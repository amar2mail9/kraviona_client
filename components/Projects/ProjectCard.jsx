"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 30px rgba(0, 203, 169, 0.25)",
      }}
      className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
    >
      {/* Card Content */}
      <div className="relative p-6 z-10">
        <h2 className="text-2xl font-semibold text-[#00cba9] mb-3">
          {project.projectName}
        </h2>

        <p className="text-gray-600 text-sm mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techUsed.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full text-[#007f73] bg-[#00cba9]/10 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link href={`/projects/${project.slug}`}>
          <motion.button
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#00cba9] to-[#007f73] text-white font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:shadow-[#00cba9]/40 transition-all"
          >
            View Details <ArrowRight size={18} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;