"use client";

import React from "react";
import Banner from "./Banner.jsx";
import Techstack from "./Techstack.jsx";
import Projects from "../Projects/Projects.jsx";
import Services from "../Services/Services.jsx";

export const HomeComponent = () => {
  return (
    <>
      <Banner />
      <Techstack />
      <Services />
      <Projects />
    </>
  );
};
