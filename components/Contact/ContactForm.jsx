"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
// Assuming Spinner is in your components folder, keeping import same
import { Spinner } from "../Spinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(""); // Added state for dropdown
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
          // Included 'service' in the payload
          body: JSON.stringify({ name, email, message, service }),
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
      setService("");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 overflow-hidden bg-white">

      {/* Modern Dot Pattern Background (Consistent with other pages) */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

      {/* Gradient Blobs for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00cba9]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full -z-10"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8 shadow-2xl rounded-3xl overflow-hidden bg-white border border-gray-100">

        {/* Left Side: Contact Info (Darker Gradient for contrast) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Abstract circle decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00cba9] rounded-full blur-2xl opacity-20"></div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Chat</h2>
            <p className="text-slate-300 mb-8 text-sm leading-relaxed">
              Have a project in mind? Fill out the form or reach out to us directly. We're here to turn your ideas into reality.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-[#00cba9]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium mt-1">+91 9608553167</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-[#00cba9]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium mt-1">amar47kumar47@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-[#00cba9]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium mt-1">Delhi, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <p className="text-sm font-medium text-slate-400 mb-4">Follow us on</p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/profile.php?id=100084196255723", color: "hover:text-[#1877F2]" },
                { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/kraviona", color: "hover:text-[#E4405F]" },
                { icon: <FaYoutube size={20} />, link: "https://www.youtube.com/@Kraviona1", color: "hover:text-[#FF0000]" },
                { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/amarkumar96085/", color: "hover:text-[#0A66C2]" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-white p-8 sm:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send a <span className="text-[#00cba9]">Message</span>
          </h2>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Spinner />
              <p className="text-gray-400 text-sm mt-4">Sending your message...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00cba9] focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00cba9] focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Interested Service</label>
                <div className="relative">
                  <select
                    value={service} // BINDING STATE HERE
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00cba9] focus:border-transparent outline-none appearance-none cursor-pointer transition-all duration-200 text-gray-600"
                  >
                    <option value="">Select a Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="graphic-design">Graphic Design</option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#00cba9] focus:border-transparent outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00cba9] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#00cba9]/30 hover:shadow-[#00cba9]/50 hover:bg-[#00b99b] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
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