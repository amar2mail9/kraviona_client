import { BlogPage } from "@/components/blog/blogpage/BlogPage";

export const metadata = {
  title: "Kraviona Blog | Tech News, AI, Web Development & Tutorials",
  description:
    "Explore Kraviona's blog for expert insights on web development, AI, Next.js, React, and technology trends. Stay updated with high-quality tutorials and guides.",
  keywords: [
    "Kraviona Blog",
    "Next.js Blog",
    "Web Development Tutorials",
    "AI News",
    "React Tips",
    "Technology Trends",
    "JavaScript",
    "MERN Stack",
    "Frontend Development",
    "Backend Development",
  ],
  authors: [{ name: "Amar Kumar", url: "https://kraviona.vercel.app/" }],
  openGraph: {
    title: "Kraviona Blog — Learn AI, Next.js, React & Modern Web Development",
    description:
      "Discover tutorials, insights, and guides on web development, React, Next.js, and artificial intelligence — by Kraviona.",
    url: "https://kraviona.vercel.app/blog",
    siteName: "Kraviona",
    images: [
      {
        url: "https://kraviona.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kraviona Blog Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraviona Blog | Next.js, React & AI Insights",
    description:
      "Stay ahead in tech with Kraviona’s blog — web dev, AI, and programming tutorials.",
    creator: "@KravionaTech",
    images: ["https://kraviona.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kraviona.vercel.app/blog",
  },
};

const page = () => {
  return <BlogPage />;
};

export default page;
