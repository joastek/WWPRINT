"use client";

import "../../styles/components/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useRef } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [activeSection, setActiveSection] = useState("");
  const handleClick = () => {
    setClick(false);
  };
  // const isHomePage =
  //   typeof window !== "undefined" && window.location.href === "/";

  return (
    <>
      <div className="navigationbar_container">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </Link>
        <div className="navigationbar_content">
          <Link href="/" style={{ textDecoration: "none" }}>
            <p onClick={() => scroll.scrollToTop()}>Strona główna</p>
          </Link>

          {/* ///////////////////////////////////////// */}

          <ScrollLink
            to="Offert"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={handleClick}
          >
            <p>Oferta</p>
          </ScrollLink>

          {/* <Link href="/#Offert" style={{ textDecoration: "none" }}>
            <p>Strona główna</p>
          </Link> */}

          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={closeMenu}
          >
            <p>O nas</p>
          </ScrollLink>
          <Link href="/Contact" style={{ textDecoration: "none" }}>
            <p>Kontakt</p>
          </Link>
        </div>
        <Link href="/Contact">
          <button className="navigationbar_button">
            <p>Zamów teraz!</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
