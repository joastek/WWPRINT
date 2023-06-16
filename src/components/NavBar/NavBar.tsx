"use client";

import "../../styles/components/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [isActive, setIsActive] = useState(false);
  const navBarRef = useRef(null);
  const handleToggleClick = () => {
    setIsActive(!isActive);
    console.log("ok");
  };

  const handleClick = () => {
    setClick(false);
    console.log("ok");
  };

  return (
    <>
      <div
        className={`navigationbar_container ${isActive ? "active" : ""}`}
        ref={navBarRef}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </Link>{" "}
        <div className="toggle-button" onClick={handleToggleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`navigationbar_content ${isActive ? "active" : ""}`}>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            onClick={handleToggleClick}
          >
            <p onClick={() => scroll.scrollToTop()}>Main Page</p>
          </Link>

          {/* ///////////////////////////////////////// */}

          <ScrollLink
            to="Offert"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>Offert</p>
          </ScrollLink>

          {/* <Link href="/#Offert" style={{ textDecoration: "none" }}>
            <p>Strona główna</p>
          </Link> */}

          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>About</p>
          </ScrollLink>
          <Link
            href="/Contact"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>Kontakt</p>
          </Link>
        </div>
        <Link href="/Contact">
          <button className="navigationbar_button">
            <p>Order now !</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
