"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Spinner } from "../Spinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) return toast.warn("Name is required");
    if (!email.trim()) return toast.warn("Email is required");
    if (!message.trim()) return toast.warn("Message cannot be empty");

    setIsLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Failed to send message");
        setIsLoading(false);
        return;
      }

      // Success
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
      setIsLoading(false);

    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-100/70 blur-3xl rounded-full translate-x-20 sm:translate-x-40 -translate-y-20 sm:-translate-y-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-100/70 blur-3xl rounded-full -translate-x-20 sm:-translate-x-40 translate-y-20 sm:translate-y-40 -z-10"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

        {/* Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-gray-900 p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Info</h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Feel free to reach out for collaborations or any project discussion.
          </p>

          <ul className="space-y-3 text-base sm:text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="text-emerald-500" size={22} /> +91 9608553167
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-emerald-500" size={22} /> amar47kumar47@gmail.com
            </li>
          </ul>

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
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00cba9] mb-6">
            Send a Message
          </h2>

          {isLoading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-50 border border-gray-300 p-3 rounded-md focus:ring-2 outline-0 focus:ring-[#00cba9]"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full bg-gray-50 border border-gray-300 p-3 rounded-md focus:ring-2 outline-0 focus:ring-[#00cba9]"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Message"
                className="w-full bg-gray-50 border border-gray-300 p-3 rounded-md focus:ring-2 outline-0 focus:ring-[#00cba9]"
              ></textarea>
              <select
                className="w-full border border-gray-300 p-3 rounded-md bg-white focus:ring-2 focus:ring-[#00cba9] outline-none cursor-pointer "
              >
                <option value="" className="">Select Service</option>
                <option value="web-development" >Web Development</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="cloud-solutions">Cloud Solutions</option>
                <option value="graphic-design">Graphic Design</option>
              </select>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#00cba9] text-white py-3 rounded-md font-semibold hover:bg-[#00b99b] transition"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
