"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Back button ke liye

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="h-screen w-full fixed  flex flex-col items-center justify-center bg-gray-950 text-white px-4 top-0   overflow-hidden z-50">

            {/* Background Gradient Blob (Optional Glow Effect) */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10"
            >
                {/* Big 404 Text */}
                <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-2">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    You seem to have gotten off on the wrong foot. This page doesn't exist, then has been moved. Let's get you back on track!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Go Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                    >
                        Go Back
                    </button>

                    {/* Go Home Button */}
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>

            {/* Footer Note (Optional) */}
            <div className="absolute bottom-10 text-gray-600 text-sm">
                Kraviona Agency &copy; {new Date().getFullYear()}
            </div>
        </div>
    );
}