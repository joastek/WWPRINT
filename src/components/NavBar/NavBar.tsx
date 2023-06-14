"use client";

import "../../styles/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [activeSection, setActiveSection] = useState("");
  const handleClick = () => {
    setClick(false);
  };
  const isHomePage =
    typeof window !== "undefined" && window.location.href === "/#Offert";

  const [isHomePageActive, setIsHomePageActive] = useState(isHomePage);
  useEffect(() => {
    setIsHomePageActive(window.location.href === "/#Offert");
  }, []);

  return (
    <>
      <div className="navigationbar_container">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </Link>
        <div className="navigationbar_content">
          {isHomePage && isHomePageActive ? (
            <ScrollLink
              to="MainPage"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={handleClick}
            >
              <p>Strona główna</p>
            </ScrollLink>
          ) : (
            <Link href="/" style={{ textDecoration: "none" }}>
              <p onClick={() => scroll.scrollToTop()}>Strona główna</p>
            </Link>
          )}
          {/* ///////////////////////////////////////// */}

          <p>
            <ScrollLink
              to="Offert"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={closeMenu}
            >
              Oferta{" "}
            </ScrollLink>
          </p>

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
