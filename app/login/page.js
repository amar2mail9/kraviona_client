// app/login/page.js  (example path)

import Login from "@/components/auth/Login/Login";
import React from "react";

export const metadata = {
    title: "Login | Kraviona",
    description: "Securely log in to your Kraviona account to access IT solutions, project dashboards, and advanced AI tools.",
    keywords: [
        "Kraviona login",
        "IT solutions",
        "AI tools",
        "software development",
        "cloud services",
        "login page"
    ],
    authors: [{ name: "Kraviona" }],
    openGraph: {
        title: "Login | Kraviona",
        description: "Access your Kraviona account and explore powerful IT and AI solutions.",
        url: "https://kraviona.vercel.app/login",
        siteName: "Kraviona",
        images: [
            {
                url: "https://kraviona.vercel.app/seo/og-image.png", // add your OG image
                width: 1200,
                height: 630,
                alt: "Kraviona Login",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Login | Kraviona",
        description: "Sign in to your Kraviona dashboard for IT and AI services.",
        images: ["https://kraviona.vercel.app/seo/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const Page = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default Page;
