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
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQueryHook";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [isActive, setIsActive] = useState(false);
  const navBarRef = useRef(null);

  const handleToggleClick = () => {
    setIsActive((active) => !active);
  };

  const handleClick = () => {
    setClick(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 120,
          duration: 4.5,
        }}
        className={`navigationbar_container ${isActive ? "active" : ""}`}
        ref={navBarRef}
      >
        <NavLink href="/" style={{ textDecoration: "none" }}>
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </NavLink>{" "}
        <motion.div className={`toggle_button_box`}>
          {" "}
          <motion.div className="toggle-button" onClick={handleToggleClick}>
            <motion.div
              className="bar"
              animate={{ opacity: isActive ? 0 : 1 }}
            ></motion.div>
            <motion.div
              animate={{ rotate: isActive ? 45 : 0, originY: 8 }}
              transition={{ duration: 0.5 }}
              className="bar"
            ></motion.div>
            <motion.div
              animate={{ rotate: isActive ? -45 : 0, originY: -7 }}
              transition={{ duration: 0.5 }}
              className="bar"
            ></motion.div>
          </motion.div>{" "}
          <motion.div
            className="bar1"
            onClick={handleToggleClick}
            animate={{ scale: isActive ? 80 : 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>
        <motion.div
          className={`navigationbar_content ${isActive ? "active" : ""}`}
        >
          <NavLink
            href="/"
            style={{ textDecoration: "none" }}
            onClick={handleToggleClick}
          >
            <motion.p
              onClick={() => scroll.scrollToTop()}
              whileTap={{ scale: isActive ? 1.5 : 1 }}
            >
              Strona główna
            </motion.p>
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
            href="/Offert/Naklejki_i_etykiety"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <p>Galeria</p>
          </NavLink>
        </motion.div>
        <NavLink href="/Contact">
          <button className="navigationbar_button">
            <p>Zamów teraz!</p>
          </button>
        </NavLink>
      </motion.div>
    </>
  );
};

export default NavBar;
