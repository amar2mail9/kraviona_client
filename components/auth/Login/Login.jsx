"use client";
import React from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm"; // Make sure this file exists
import Link from "next/link";

const Login = () => {
    return (
        <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden text-gray-800">
            {/* --- Animated Floating Lights --- */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/60 rounded-full filter blur-3xl opacity-70"
                animate={{ y: [0, 40, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/60 rounded-full filter blur-3xl opacity-70"
                animate={{ y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />

            {/* --- Main Content --- */}
            <section className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center z-10 space-y-12 lg:space-y-0">
                {/* --- Left Section --- */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-left p-8 lg:p-0 lg:mr-20"
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-500 mb-2">
                        Welcome Back 👋
                    </h1>
                    <h2 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text mb-6">
                        Kraviona
                    </h2>
                    <p className="text-gray-600 text-lg max-w-sm leading-relaxed">
                        Log in to continue exploring cutting-edge tools and manage your
                        productivity hub.
                    </p>

                    <section className="mt-16 text-md text-gray-600">
                        Don’t have an account?
                        <Link
                            href="/sign-up"
                            className="text-emerald-500 font-semibold hover:text-cyan-500 ml-1 transition-colors"
                        >
                            Sign up
                        </Link>
                    </section>
                </motion.div>

                {/* --- Right Section (Form) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative p-8 md:p-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 hover:border-emerald-500/40 transition duration-500 ease-in-out"
                >
                    {/* --- Logo --- */}
                    <section className="flex items-center mb-10">
                        <section className="w-4 h-4 bg-emerald-500 rounded-full mr-3 shadow-[0_0_10px_#10b981]"></section>
                        <h3 className="text-2xl font-bold text-gray-900">Kraviona</h3>
                    </section>

                    {/* --- Login Form --- */}
                    <LoginForm /> {/* This component will also need a light theme */}

                    {/* --- Right Decorative Element --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="absolute top-1/4 -right-20 hidden md:block"
                    >
                        <section className="relative w-48 h-48 bg-gray-100/60 rounded-xl p-4 shadow-lg flex items-center justify-center border border-gray-200">
                            <section className="w-16 h-16 bg-gray-200 rounded-full relative flex items-center justify-center">
                                <section className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-gray-100">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </section>
                            </section>
                            <section className="absolute -right-4 top-1/3 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/40">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </section>
                        </section>
                    </motion.div>
                </motion.div>
            </section>

            {/* --- Footer --- */}
            <section className="absolute bottom-4 right-4 flex items-center text-sm font-semibold text-gray-500">
                <span className="mr-2">Kraviona</span>
                <section className="w-6 h-6 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></section>
            </section>
        </section>
    );
};

export default Login;