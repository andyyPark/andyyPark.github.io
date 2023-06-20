import React, { useState } from "react";
import Layout from "@/components/Layout";
import NavBar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  const sections = [
    { id: 0, text: "Home", href: "/" },
    { id: 1, text: "About", href: "#about" },
    { id: 2, text: "Research", href:"#research"}
  ];

  const [activeSection, setActiveSection] = useState(0);
  return (
    <Layout>
      <NavBar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <hr id="outer-divider" />
      {sections.map((section) => (
        <Section
          key={section.id}
          active={section.id === activeSection}
          text={section.text}
          href={section.href}
        />
      ))}
      <hr id="outer-divider" />
      <Footer />
    </Layout>
  );
}
