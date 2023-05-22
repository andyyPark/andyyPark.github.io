import React, { useState } from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Section = ({ active, text, href }) => {
  console.log(active, text, href);
  if (text === "Home") {
    return <HomeSection active={active}/>;
  } else if (text === "About") {
    return <AboutSection active={active}/>;
  } else {
    return <ContactSection active={active}/>;
  }
};

export default Section;
