"use client";
import React, { useState } from "react";
import { User, Mail, Lock, Phone, ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const SignUpForm = () => {
    const [otpForm, setOtpForm] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    // --- Validation ---
    const validateSignup = () => {
        if (!fullname || !email || !username || !password || !phone) {
            toast.error("All fields are required!");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Enter a valid email address!");
            return false;
        }
        if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
            toast.error("Enter a valid username!");
            return false;
        }
        if (phone.length < 10) {
            toast.error("Enter a valid phone number!");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!");
            return false;
        }
        return true;
    };

    // --- Handle Signup Form Submit ---
    const submitForm = async (e) => {
        e.preventDefault();
        if (!validateSignup()) return;

        setIsLoading(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/create-account`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ fullname, email, username, password, phone }),
                }
            );

            const data = await res.json();
            setIsLoading(false);

            if (res.ok && data.success) {
                toast.success(data.message || "OTP sent successfully!");
                setOtpForm(true);
            } else {
                toast.error(data.message || "Signup failed!");
            }
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message || "Something went wrong!");
        }
    };

    // --- Handle OTP Verification ---
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        if (!otp || otp.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP!");
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/verify-otp`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ inputValue: email, otp }),
                }
            );

            const data = await res.json();
            setIsLoading(false);

            if (res.ok && data.success) {
                toast.success("Account created successfully!");
                setIsLoading(true);
                localStorage.setItem("user", JSON.stringify(data.user));
                Cookies.set("token", data.user.token);
                router.push("/");
            } else {
                toast.error(data.message || "Invalid OTP!");
            }
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message || "Something went wrong!");
        }
    };

    if (isLoading) return <Spinner />;

    return (
        <div>
            {!otpForm ? (
                // --- Signup Form ---
                <form className="space-y-6" onSubmit={submitForm}>
                    {/* Full Name */}
                    <div className="flex items-center border-b-2 border-gray-600 focus-within:border-emerald-400 transition">
                        <User className="text-gray-300 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full py-2 bg-treansparent text-gray-800e placeholder-gray-400 outline-none"
                            autoComplete="name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border-b-2 border-gray-600 focus-within:border-emerald-400 transition">
                        <Mail className="text-gray-300 mr-3 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-800e placeholder-gray-400 outline-none"
                            autoComplete="email"
                        />
                    </div>

                    {/* Username */}
                    <div className="flex items-center border-b-2 border-gray-600 focus-within:border-emerald-400 transition">
                        <User className="text-gray-300 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            min={3}
                            max={16}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-800e placeholder-gray-400 outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex items-center border-b-2 border-gray-600 focus-within:border-emerald-400 transition">
                        <Phone className="text-gray-300 mr-3 w-5 h-5" />
                        <input
                            type="tel"
                            placeholder="+91 8888888888"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-800e placeholder-gray-400 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border-b-2 border-gray-600 focus-within:border-emerald-400 transition">
                        <Lock className="text-gray-300 mr-3 w-5 h-5" />
                        <input
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-800e placeholder-gray-400 outline-none"
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                    >
                        Send OTP
                    </button>
                </form>
            ) : (
                // --- OTP Verification Form ---
                <form className="space-y-6" onSubmit={handleOtpSubmit}>
                    <div className="flex items-center justify-center mb-4">
                        <ShieldCheck className="w-10 h-10 text-emerald-400" />
                    </div>

                    <p className="text-gray-300 text-center text-sm mb-6">
                        Enter the 6-digit OTP sent to your email.
                    </p>

                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="number"
                        maxLength={6}
                        className="w-full h-16 bg-transparent border-2 border-gray-600 rounded-lg text-center text-2xl text-gray-800e focus:border-emerald-400 outline-none placeholder-gray-400"
                        placeholder="______"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                    >
                        Verify OTP
                    </button>

                    <p
                        onClick={() => setOtpForm(false)}
                        className="text-center text-sm text-emerald-400 hover:text-cyan-400 cursor-pointer mt-6 transition"
                    >
                        ← Back to Signup
                    </p>
                </form>
            )}
        </div>
    );
};
