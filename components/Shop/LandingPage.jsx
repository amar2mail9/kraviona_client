import React from "react";
import { Search, Command, ArrowUpRight, Heart, ShoppingBag, ArrowRight, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export const LandingPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
            <BannerWithSearch />
            <BrandMarquee />
            <FeaturedCollection />
            <CategoryBento />
            <Footer />
        </div>
    );
};

const BannerWithSearch = () => {
    return (
        <div className="relative min-h-screen bg-slate-50 overflow-hidden">

            {/* --- 1. BACKGROUND EFFECTS (Light Mode) --- */}

            {/* Noise Texture (Subtle Grain) */}
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}>
            </div>

            {/* Soft Color Blobs (Aurora effect adapted for Light Mode) */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px] animate-pulse-slow mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-[80px] animate-pulse-slow delay-1000 mix-blend-multiply"></div>


            {/* --- 2. MAIN CONTENT --- */}
            <div className="relative z-30 container mx-auto px-6 h-screen flex flex-col justify-center items-center">

                {/* Floating Badge */}
                <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-emerald-700 transition">KARAVIONA 2025</span>
                    </div>
                </div>

                {/* Main Typography (Dark on Light) */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center tracking-tighter leading-[0.9] mb-10 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600">
                        DEFINING
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-emerald-600 to-teal-800 drop-shadow-sm">
                        LUXURY.
                    </span>
                </h1>

                {/* --- 3. THE "COMMAND PALETTE" SEARCH (Clean White Look) --- */}
                <div className="w-full max-w-2xl animate-scale-up opacity-0" style={{ animationDelay: '0.5s' }}>
                    <div className="relative group">
                        {/* Shadow behind search */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/50 via-teal-200/50 to-emerald-200/50 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

                        <div className="relative flex items-center bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">

                            {/* Icon Box */}
                            <div className="h-12 w-12 bg-emerald-50 rounded-xl flex items-center justify-center mr-4 border border-emerald-100 text-emerald-600">
                                <Search size={20} />
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search products, collections..."
                                className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-lg w-full h-full font-medium"
                            />

                            {/* Keyboard Shortcut Hint */}
                            <div className="hidden md:flex items-center gap-2 mr-4 text-gray-400 border border-gray-200 px-2 py-1 rounded bg-gray-50">
                                <Command size={12} />
                                <span className="text-xs font-mono">K</span>
                            </div>

                            {/* Action Button */}
                            <button className="bg-gray-900 text-white h-12 px-6 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all duration-200 flex items-center gap-2 shadow-lg">
                                Go <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links below search */}
                    <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-emerald-700 transition flex items-center gap-1 font-medium">
                            <ArrowUpRight size={14} /> Emerald Sets
                        </a>
                        <a href="#" className="hover:text-emerald-700 transition flex items-center gap-1 font-medium">
                            <ArrowUpRight size={14} /> Watches
                        </a>
                    </div>
                </div>

                {/* --- 4. FLOATING CARDS (Light Themed) --- */}

                {/* Card Left */}
                <div className="hidden lg:block absolute left-[5%] top-[30%] w-48 animate-float-slow opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <div className="bg-white/70 backdrop-blur-md border border-white/60 p-2 rounded-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <img src="https://rukminim2.flixcart.com/image/480/480/l0mr7gw0/hand-messenger-bag/x/j/3/15-6-inch-laptop-bag-messenger-bag-office-bag-travel-bag-original-imagcdsrzmswtzyx.jpeg?q=90" className="rounded-xl w-full h-32 object-cover hover:brightness-110 transition duration-500" alt="Bag" />
                        <div className="p-2 flex justify-between items-center">
                            <span className="text-xs text-gray-600 font-medium">Clutch</span>
                            <span className="text-xs font-bold text-emerald-700">$890</span>
                        </div>
                    </div>
                </div>

                {/* Card Right */}
                <div className="hidden lg:block absolute right-[5%] bottom-[20%] w-52 animate-float-slower opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="bg-white/70 backdrop-blur-md border border-white/60 p-2 rounded-2xl rotate-[6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                        <img src="https://images.unsplash.com/photo-1551488852-0812d1247789?q=80&w=1000&auto=format&fit=crop" className="rounded-xl w-full h-40 object-cover hover:brightness-110 transition duration-500" alt="Jewelry" />
                        <div className="p-2 flex justify-between items-center">
                            <span className="text-xs text-gray-600 font-medium">Pendant</span>
                            <span className="text-xs font-bold text-emerald-700">$1,200</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom Animations CSS (Same logic, works for light mode too) */}
            <style>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-slower { animation: float 8s ease-in-out infinite; }

        .animate-fade-in { animation: fadeIn 1s forwards; }
        .animate-slide-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale-up { animation: scaleUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>
        </div>
    );
}


// --- 1. INFINITE SCROLL MARQUEE (Light Theme) ---
const BrandMarquee = () => {
    return (
        <div className="w-full bg-emerald-50/50 border-y border-gray-200 overflow-hidden py-5 relative z-20 backdrop-blur-sm">
            <div className="flex w-[200%] animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-12 items-center mx-6">
                        <span className="text-emerald-800 font-bold tracking-[0.2em] text-sm uppercase">New Season</span>
                        <span className="text-gray-300 text-xl">•</span>
                        <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">Sustainable Luxury</span>
                        <span className="text-gray-300 text-xl">•</span>
                        <span className="text-emerald-800 font-bold tracking-[0.2em] text-sm uppercase">Exclusive Drops</span>
                        <span className="text-gray-300 text-xl">•</span>
                        <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">Worldwide Shipping</span>
                        <span className="text-gray-300 text-xl">•</span>
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
        </div>
    );
};

// --- 2. PRODUCT CARD COMPONENT (Light Theme) ---
const ProductCard = ({ image, title, price, category }) => {
    return (
        <div className="group relative w-full cursor-pointer">
            {/* Image Container */}
            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Background Image */}
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay - Gradient is now lighter or subtle black to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <button className="bg-white p-3 rounded-full text-gray-800 hover:bg-emerald-500 hover:text-white transition shadow-lg">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white p-3 rounded-full text-gray-800 hover:bg-emerald-500 hover:text-white transition shadow-lg delay-75">
                        <ShoppingBag size={18} />
                    </button>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md shadow-sm rounded-full text-xs uppercase tracking-wider text-emerald-800 font-bold">
                        {category}
                    </span>
                </div>
            </div>

            {/* Product Info (Below Image - Clean Dark Text) */}
            <div className="mt-5 flex justify-between items-end px-2">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{title}</h3>
                    <p className="text-gray-500 text-sm mt-1">Limited Edition</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">${price}</span>
                    <ArrowUpRight size={18} className="text-gray-400 group-hover:text-emerald-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    );
};

// --- 3. MAIN SECTION COMPONENT (Light Theme) ---
export const FeaturedCollection = () => {
    const products = [
        {
            id: 1,
            title: "Emerald Silk Gown",
            price: "450.00",
            category: "Evening Wear",
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Velvet Blazer",
            price: "280.00",
            category: "Unisex",
            image: "https://images.unsplash.com/photo-1507680434567-5739c8a97801?q=80&w=1887&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Jade Pendant",
            price: "1,200.00",
            category: "Fine Jewelry",
            image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-white min-h-screen pb-20 relative">

            <div className="container mx-auto px-6 py-20">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Arrivals</span>
                        </h2>
                        <p className="text-gray-500 max-w-sm text-lg font-light">
                            Handpicked pieces defining the new era of Karaviona style.
                        </p>
                    </div>
                    <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition duration-300 text-sm uppercase tracking-wider font-semibold">
                        View All Collections
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 4. BENTO GRID CATEGORIES (Asymmetrical Layout) ---
export const CategoryBento = () => {
    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center tracking-tight">
                    Shop by <span className="italic font-serif text-emerald-600">Category</span>
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">

                    {/* Large Item (Left) */}
                    <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Women" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-3xl font-bold">Women's Collection</h3>
                            <button className="mt-2 flex items-center gap-2 text-sm font-medium hover:underline">Explore <ArrowRight size={16} /></button>
                        </div>
                    </div>

                    {/* Medium Item (Top Right) */}
                    <div className="md:col-span-2 md:row-span-1 relative group rounded-3xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2121&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Men" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold">Men's Editorial</h3>
                            <button className="mt-2 flex items-center gap-2 text-sm font-medium hover:underline">Shop Now <ArrowRight size={16} /></button>
                        </div>
                    </div>

                    {/* Small Item (Bottom Right 1) */}
                    <div className="md:col-span-1 md:row-span-1 relative group rounded-3xl overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1590739225287-bd2f39b90fdf?q=80&w=1943&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Accessories" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-xl font-bold">Accessories</h3>
                        </div>
                    </div>

                    {/* Small Item (Bottom Right 2) */}
                    <div className="md:col-span-1 md:row-span-1 bg-emerald-100 rounded-3xl flex flex-col justify-center items-center text-center p-6 group cursor-pointer hover:bg-emerald-200 transition-colors">
                        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                            <ArrowRight size={32} />
                        </div>
                        <h3 className="text-emerald-900 font-bold text-xl">View All<br />Categories</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- 5. NEWSLETTER & FOOTER ---
export const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 rounded-3xl p-10 mb-20">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Karaviona List</h3>
                        <p className="text-gray-500">Get early access to drops and exclusive content.</p>
                    </div>
                    <div className="w-full md:w-auto flex items-center bg-white p-2 rounded-full border border-gray-200 shadow-sm focus-within:border-emerald-500 focus-within:ring-2 ring-emerald-100 transition">
                        <Mail className="text-gray-400 ml-3" size={20} />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent outline-none px-4 py-2 text-gray-900 placeholder-gray-400 w-full md:w-64"
                        />
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-emerald-600 transition">
                            Subscribe
                        </button>
                    </div>
                </div>



            </div>
        </footer>
    );
};
