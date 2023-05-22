import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NAV_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "#about" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header>
      <nav id="nav">
        {NAV_LIST.map((item, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={item.text}
            className="nav__button"
          >
            <NavItem active={activeIdx === idx} {...item}></NavItem>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
