"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export const SearchBanner = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Searching for:", query);
      // Optional: router.push(`/blogs?search=${query}`);
    }
  };

  return (
    <section className="relative w-full text-center py-28 px-6 bg-[radial-gradient(circle_at_center,_#0f172a,_#0a0a0a)] text-white overflow-hidden">
      {/* 💫 Glow effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-600/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-emerald-400 via-violet-400 to-emerald-300 bg-clip-text text-transparent">
          Explore Innovative Tech Blogs
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          The latest insights on Web Development, AI, and Next-Gen Technology — powered by Kraviona.
        </p>

        {/* search form */}
        <form className="w-[80%] mx-auto flex    h-[60px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden shadow-lg hover:shadow-emerald-400/30 transition-all duration-300">
          <input type="text" className=" md:w-11/12 w-full h-full px-4 outline-0  " placeholder="Search articles... (e.g. AI, React, Next.js)" autoFocus={true} />

          <button className="md:w-1/12 h-full hidden md:block ">
            <Search />
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">
          🔍 Try keywords like{" "}
          <span className="font-semibold text-emerald-400">"JavaScript"</span>,{" "}
          <span className="font-semibold text-emerald-400">"AI"</span>, or{" "}
          <span className="font-semibold text-emerald-400">"Next.js"</span>
        </p>
      </div>
    </section>
  );
};
