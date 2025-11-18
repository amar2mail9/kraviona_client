import React from "react";
import Approach from "./Approach";
import OurTeam from "./OurTeam";
import Reviews from "./Reviews";
import AboutBanner from "./Banner";
// import { NextSeo } from "next-seo";

const AboutUs = () => {
  return (
    <section>
      {/* <NextSeo
        canonical="https://kraviona.vercel.app/about-us"
        title="About Us - Kraviona"
        description="Professional web developers at Kraviona delivering modern, SEO-optimized websites."
        openGraph={{
          url: "https://kraviona.vercel.app/about",
          title: "About Us - Kraviona",
          description:
            "Meet our team of professional web developers creating SEO-friendly websites.",
          images: [
            {
              url: "/about1.jpeg",
              width: 800,
              height: 600,
              alt: "About Kraviona",
            },
          ],
          site_name: "Kraviona",
        }}
      /> */}

      <AboutBanner />
      <Approach />
      <OurTeam />
      <Reviews />
    </section>
  );
};

export default AboutUs;
