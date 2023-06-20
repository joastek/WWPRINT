"use client";

import "../../styles/components/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import NavLink from "next/link";
import {
  Link as ScrollLink,
  animateScroll,
  animateScroll as scroll,
} from "react-scroll";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [isActive, setIsActive] = useState(false);

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
      <div className="navigationbar_container">
        <NavLink href="/">
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </NavLink>{" "}
        <div className="toggle-button" onClick={handleToggleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="navigationbar_content">
          {" "}
          <NavLink
            href="/"
            onClick={handleToggleClick}
            style={{ textDecoration: "none", color: " #837b7b" }}
          >
            <p
              onClick={() => scroll.scrollToTop()}
              // className={isActiva("/") ? "active" : ""}
            >
              {" "}
              Strona główna{" "}
            </p>
          </NavLink>
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
            <NavLink href="/#Offert" style={{ textDecoration: "none" }}>
              {" "}
              <p>Oferta</p>{" "}
            </NavLink>
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
            <NavLink href="/#About" style={{ textDecoration: "none" }}>
              {" "}
              <p>O nas</p>{" "}
            </NavLink>
          </ScrollLink>
          <NavLink
            href="/Contact"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>Kontakt</p>
          </NavLink>
          <NavLink
            href="/Offert"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>Galeria</p>
          </NavLink>
        </div>
        <NavLink href="/Contact">
          <button className="navigationbar_button">
            <div>Zamów teraz!</div>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
