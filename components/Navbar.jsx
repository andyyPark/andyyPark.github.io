import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem"

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
      <nav className="`nav`">
        <div className={`${navActive ? "active" : ""} nav__item-list`}>
          {NAV_LIST.map((item, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={item.text}
            >
              <NavItem active={activeIdx === idx} {...item}></NavItem>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
