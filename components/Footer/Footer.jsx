"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const locationMatch = usePathname();

  const blockFooter = [
    "/sign-up",
    "/login",
    "/sign-up/verify",
    "/login/verify",
  ];

  if (blockFooter.includes(locationMatch)) {
    return null;
  }
  return (
    <footer className="bg-white text-gray-600 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* 🟩 Column 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 text-xl font-semibold mb-4">Kraviona</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We build modern, SEO-friendly, and high-performance websites using
            Next.js, React, and Node.js to grow your online presence.
          </p>
        </motion.div>

        {/* 🟩 Column 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-500 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-emerald-500 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-emerald-500 transition duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-emerald-500 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* 🟩 Column 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Our Services
          </h2>
          <ul className="space-y-2">
            <li>Website Development</li>
            <li>SEO Optimization</li>
            <li>UI/UX Design</li>
            <li>App Development</li>
          </ul>
        </motion.div>

        {/* 🟩 Column 4 */}
        {/* 🟩 Column 4 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Connect With Us
          </h2>

          <div className="flex gap-5 mt-8 text-2xl sm:text-3xl flex-wrap">
            <a href="https://www.facebook.com/profile.php?id=100084196255723" target="_blank" className="text-[#1877F2] hover:scale-110 transition-transform">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/kraviona" target="_blank" className="text-[#E4405F] hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@Kraviona1" target="_blank" className="text-[#FF0000] hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/amarkumar96085/" target="_blank" className="text-[#0A66C2] hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
          </div>

          {/* Contact Details */}
          <div className="mt-5 text-sm space-y-2">
            <p>
              📞 <span className="font-medium">+91 9608553167</span>
            </p>
            <p>
              📧 <a href="mailto:contact@kraviona.com" className="hover:text-emerald-500 transition">
                amar47kumar47@gmail.com
              </a>
            </p>

          </div>
        </motion.div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-sm mt-6 text-gray-600">
        © {year}{" "}
        <span className="text-emerald-500 font-semibold">Kraviona</span>. All
        rights reserved. | Designed by{" "}
        <span className="text-gray-800 font-semibold">Amar Kumar</span>
      </div>
    </footer>
  );
}