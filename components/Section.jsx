import React, { useState } from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResearchSection from "@/components/ResearchSection";

const Section = ({ active, text, href }) => {
  if (text === "Home") {
    return <HomeSection active={active}/>;
  } else if (text === "About") {
    return <AboutSection active={active}/>;
  } else if (text === "Research") {
    return <ResearchSection active={active}/>
  }
  else {
    return <ContactSection active={active}/>;
  }
};

export default Section;
