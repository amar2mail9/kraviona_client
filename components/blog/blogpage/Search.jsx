"use client";

import { useState } from "react";
import { Search, Sparkles, TrendingUp, ArrowRight } from "lucide-react"; // Added icons
import { useRouter } from "next/navigation";

export const SearchBanner = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false); // To handle focus animations
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const encodedQuery = encodeURIComponent(query.trim());
      router.push(`/search/${encodedQuery}`);
    }
  };

  const handleKeywordClick = (keyword) => {
    setQuery(keyword);
    const encodedQuery = encodeURIComponent(keyword);
    router.push(`/search/${encodedQuery}`);
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-slate-50">

      {/* --- MODERN BACKGROUND ELEMENTS --- */}

      {/* 1. Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Soft Gradient Orbs (More subtle now) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] opacity-50"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* --- BADGE --- */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-emerald-500 fill-emerald-100" />
          <span className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">
            The Kraviona Knowledge Hub
          </span>
        </div>

        {/* --- HEADLINE --- */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Discover the future of <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Technology & Design
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Curated insights on Web 3.0, Artificial Intelligence, and Modern Development.
          Start your journey below.
        </p>

        {/* --- MODERN SEARCH BAR --- */}
        <div className={`relative max-w-2xl mx-auto transition-all duration-300 transform ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full blur opacity-20 -z-10"></div>

          <form
            onSubmit={handleSearch}
            className={`relative flex items-center w-full h-16 bg-white rounded-full border ${isFocused ? 'border-emerald-500 ring-4 ring-emerald-500/10' : 'border-slate-200'} shadow-xl shadow-slate-200/50 transition-all duration-300`}
          >
            <div className="pl-6 text-slate-400">
              <Search className={`w-6 h-6 transition-colors ${isFocused ? 'text-emerald-600' : 'text-slate-400'}`} />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 h-full px-4 bg-transparent outline-none text-slate-800 placeholder-slate-400 text-lg font-medium"
              placeholder="Search for articles..."
            />

            <button
              type="submit"
              className="mr-2 p-3 rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>

        {/* --- TRENDING TAGS (PILLS) --- */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Trending now:</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["Web 3.0", "Artificial Intelligence", "Next.js 15", "Tailwind CSS"].map((tag) => (
              <button
                key={tag}
                onClick={() => handleKeywordClick(tag)}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};