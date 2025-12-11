// app/signup/page.js

import SignUp from "@/components/auth/SignUp/SignUp";
import React from "react";

export const metadata = {
  title: "Create Account | Kraviona",
  description:
    "Create your Kraviona account to access advanced IT solutions, AI tools, cloud services, and personalized dashboards.",
  keywords: [
    "Kraviona signup",
    "Create account",
    "IT services",
    "AI solutions",
    "User registration",
    "Kraviona"
  ],
  openGraph: {
    title: "Create Account | Kraviona",
    description:
      "Join Kraviona and unlock powerful IT and AI services by creating your account.",
    url: "https://kraviona.vercel.app/signup",
    siteName: "Kraviona",
    images: [
      {
        url: "https://kraviona.vercel.app/favicon.ico", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Kraviona Sign Up",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Account | Kraviona",
    description:
      "Register your Kraviona account and explore next-generation IT and AI tools.",
    images: ["https://kraviona.vercel.app/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Page;
