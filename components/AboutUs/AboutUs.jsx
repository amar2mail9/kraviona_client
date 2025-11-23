import React from "react";
import Approach from "./Approach";
import OurTeam from "./OurTeam";
import Reviews from "./Reviews";
import AboutBanner from "./Banner";
// import { NextSeo } from "next-seo";

const AboutUs = () => {
  return (
    <section>


      <AboutBanner />
      <Approach />
      <OurTeam />
      <Reviews />
    </section>
  );
};

export default AboutUs;
