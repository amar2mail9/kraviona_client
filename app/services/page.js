import Services from "@/components/Services/Services";

export const metadata = {
  title: "Our Services | Kraviona",
  description:
    "Discover Kraviona's professional web development, SEO, and app design services.",
  openGraph: {
    title: "Kraviona - Our Services",
    description:
      "We offer professional website, React, and Next.js development services.",
    url: "https://kraviona.vercel.app/services",
    siteName: "Kraviona",
    images: [
      {
        url: "/l-logo.png",
        width: 800,
        height: 600,
        alt: "Kraviona Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <Services />
    </div>
  );
}
