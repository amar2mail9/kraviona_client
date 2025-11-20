import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ToastContainer } from "react-toastify";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://kraviona.vercel.app"),
  title: "Kraviona - Professional Website Developer",
  description:
    "Kraviona builds high-quality websites and web applications using modern technologies like Next.js, React, and Node.js.",
  keywords:
    "web developer, kraviona, next.js developer, website development, react developer, MERN stack, kravion, website, delhi, JS , /",
  openGraph: {
    title: "Kraviona - Professional Website Developer",
    description:
      "Creating stunning, fast, and SEO-friendly websites for your business.",
    url: "https://kraviona.vercel.app",
    siteName: "Kraviona",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Kraviona Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🧠 Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Canonical & Robots for SEO */}
        <link rel="canonical" href="https://kraviona.vercel.app/" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="9af3b71ade4d3403" />

        {/* ✅ Google Analytics (only once) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-green-50`}
      >
        <Layout>
          {children}

          <ToastContainer />
          <ChatWidget />
        </Layout>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
