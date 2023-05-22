import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";


const Navbar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <header>
      <nav id="nav">
        {sections.map((section, idx) => (
          <div
            onClick={() => {
              setActiveSection(section.id);
            }}
            key={section.id}
            className="nav__button"
          >
            <NavItem active={activeSection === idx} {...section}></NavItem>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
