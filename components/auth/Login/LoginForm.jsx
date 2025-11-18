"use client";
import React, { useState } from "react";
import { User, Shield, ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Spinner } from "@/components/Spinner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [otpForm, setOtpForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [isPasswordMode, setIsPasswordMode] = useState(false);

    const router = useRouter();

    // -------------------------
    // Password Login
    // -------------------------
    const loginWithPassword = async (e) => {
        e.preventDefault();
        if (!inputValue || !password) return toast.error("All fields required");

        try {
            setIsLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ inputValue, password }),
                }
            );

            const data = await res.json();

            if (!data.success) {
                toast.error(data.message);
                return setIsLoading(false);
            }

            toast.success("Login Successful");
            Cookies.set("token", data.user.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            router.push("/");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // -------------------------
    // Send OTP
    // -------------------------
    const sendOTP = async (e) => {
        e.preventDefault();
        if (!inputValue) return toast.error("Enter email or username");

        try {
            setIsLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/resend-otp`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ inputValue }),
                }
            );

            const data = await res.json();

            if (!data.success) {
                toast.error(data.message);
                return setIsLoading(false);
            }

            toast.success("OTP sent successfully");
            setOtpForm(true); // Switch to OTP form

        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // -------------------------
    // Verify OTP
    // -------------------------
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        if (!otp) return toast.error("Enter OTP");

        try {
            setIsLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/verify-otp`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ inputValue, otp }),
                }
            );

            const data = await res.json();

            if (!data.success) {
                toast.error(data.message);
                return setIsLoading(false);
            }

            toast.success("OTP Verified!");
            Cookies.set("token", data.user.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            router.push("/");

        } catch (err) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    if (isLoading) return <Spinner />;

    return (
        <section>
            <div>

                {!otpForm ? (
                    // -------------------------
                    // Login Form
                    // -------------------------
                    <form className="space-y-6">
                        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-emerald-500 transition">
                            <User className="text-gray-500 mr-3 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="email or username"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full py-2 bg-transparent text-gray-900 outline-none"
                            />
                        </div>

                        {isPasswordMode && (
                            <div className="flex items-center border-b-2 border-gray-300 focus-within:border-emerald-500 transition">
                                <Shield className="text-gray-500 mr-3 w-5 h-5" />
                                <input
                                    type="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2 bg-transparent text-gray-900 outline-none"
                                />
                            </div>
                        )}

                        {isPasswordMode ? (
                            <button
                                type="submit"
                                onClick={loginWithPassword}
                                className="w-full text-white py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold"
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={sendOTP}
                                className="w-full py-3 bg-gradient-to-r from-emerald-500 text-white to-cyan-500 rounded-lg font-semibold"
                            >
                                Send OTP
                            </button>
                        )}

                        {/* Switch */}
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setIsPasswordMode(!isPasswordMode)}
                                className="text-emerald-600 mt-4"
                            >
                                {isPasswordMode
                                    ? "Login with OTP"
                                    : "Login with Password"}
                            </button>
                        </div>
                    </form>
                ) : (
                    // -------------------------
                    // OTP Form
                    // -------------------------
                    <form className="space-y-6" onSubmit={handleOtpSubmit}>
                        <div className="flex items-center justify-center mb-4">
                            <ShieldCheck className="w-10 h-10 text-emerald-500" />
                        </div>

                        <p className="text-gray-600 text-center text-sm">
                            Enter the 6-digit OTP sent to your email.
                        </p>

                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full h-16 border-2 border-gray-300 rounded-lg text-center text-2xl"
                            maxLength={6}
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-emerald-500 text-white to-cyan-500 rounded-lg font-semibold"
                        >
                            Verify OTP
                        </button>

                        <p
                            onClick={() => setOtpForm(false)}
                            className="text-center text-emerald-500 cursor-pointer mt-4"
                        >
                            ← Back to Login
                        </p>
                    </form>
                )}

            </div>
        </section>
    );
};

export default LoginForm;
