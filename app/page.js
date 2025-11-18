import { HomeComponent } from "@/components/home/Home";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://kraviona.vercel.app"),
  title: "Kraviona — Creative Web Development Agency",
  description:
    "Kraviona builds high-quality, SEO-optimized websites using Next.js, React, and modern web technologies. We turn your digital ideas into reality.",
  keywords:
    "web developer, kraviona, next.js developer, website development, react developer, MERN stack, web design agency, modern websites",
  authors: [{ name: "Kraviona Team", url: "https://kraviona.vercel.app" }],
  openGraph: {
    title: "Kraviona — Creative Web Development Agency",
    description:
      "Empowering brands with high-performance, modern, and SEO-optimized web applications built using Next.js and React.",
    url: "https://kraviona.vercel.app/",
    siteName: "Kraviona",
    images: [
      {
        url: "/l-logo.png",
        width: 800,
        height: 600,
        alt: "Kraviona Agency Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraviona — Professional Website Developers",
    description:
      "We build fast, SEO-friendly, and scalable websites using modern technologies like Next.js and React.",
    images: ["/l-logo.png"],
  },
  alternates: {
    canonical: "https://kraviona.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const page = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default page;
