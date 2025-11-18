
import AboutUs from "@/components/AboutUs/AboutUs";
import React from "react";

export const metadata = {
  title: "About Us - Kraviona",
  description:
    "Learn more about Kraviona, a professional web development company specializing in Next.js, React, and modern technologies.",
  keywords:
    "about kraviona, web development team, next.js experts, website developers",
  openGraph: {
    title: "About Us - Kraviona",
    description:
      "Kraviona is a team of professional web developers creating fast, secure, and SEO-friendly websites.",
    url: "https://kraviona.vercel.app/about-us",
    siteName: "Kraviona",
    images: [
      {
        url: "/og-about.png",
        width: 800,
        height: 600,
        alt: "About Kraviona",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;
