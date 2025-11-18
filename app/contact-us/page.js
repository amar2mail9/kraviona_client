import Contact from "@/components/Contact/Contact";
import React from "react";

export const metadata = {
  title: "Contact Us - Kraviona",
  description:
    "Learn more about Kraviona, a professional web development company specializing in Next.js, React, and modern technologies.",
  keywords:
    "Contact Kraviona, web development team, Next.js experts, website developers",
  openGraph: {
    title: "Contact Us - Kraviona",
    description:
      "Kraviona is a team of professional web developers creating fast, secure, and SEO-friendly websites.",
    url: "https://kraviona.vercel.app/contact-us",
    siteName: "Kraviona",
    locale: "en_US",
    type: "website",
  },
};

const contact = () => {
  return <Contact />;
};

export default contact;
