"use client";
import "../../styles/components/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import NavLink from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import PhoneToggle from "./PhoneToggle";

const NavBar = () => {
  const path = usePathname();
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
        <PhoneToggle
          isActive={isActive}
          handleToggleClick={handleToggleClick}
        />
        <motion.div
          className={`navigationbar_content ${isActive ? "active" : ""}`}
        >
          <ScrollLink
            activeClass={path === "/" ? "base-scroll" : ""}
            to="MainPage"
            spy={true}
            smooth={true}
          >
            <NavLink
              href="/"
              style={{ textDecoration: "none" }}
              onClick={handleToggleClick}
            >
              <motion.p
                className="base-text"
                onClick={() => scroll.scrollToTop()}
              >
                Strona główna
              </motion.p>
            </NavLink>
          </ScrollLink>
          {/* ///////////////////////////////////////// */}

          <motion.div className="div" whileHover={{ scale: 1.2 }}>
            <ScrollLink
              activeClass={path === "/" ? "base-scroll" : ""}
              to="Oferta"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => {
                handleClick();
                handleToggleClick();
              }}
            >
              <NavLink href="/#Oferta" style={{ textDecoration: "none" }}>
                {" "}
                <p
                  // whileHover={{ scale: 1.1, fontWeight: 700 }}
                  className="base-text"
                >
                  Oferta
                </p>{" "}
              </NavLink>
            </ScrollLink>
          </motion.div>
          <ScrollLink
            activeClass={path === "/" ? "base-scroll" : ""}
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
          >
            <NavLink
              href="/#About"
              style={{ textDecoration: "none" }}
              // className={path === "/" ? "base-scroll" : "base-text"}
            >
              {" "}
              <p className="base-text">O nas</p>{" "}
            </NavLink>
          </ScrollLink>
          <NavLink
            href="/Contact"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
            className={path === "/Contact" ? "base-scroll" : ""}
          >
            <p className="base-text">Kontakt</p>
          </NavLink>
          <NavLink
            href="/Offert/Naklejki_i_etykiety"
            style={{ textDecoration: "none" }}
            onClick={() => {
              handleClick();
              handleToggleClick();
            }}
            className={
              path === "/Offert/Oklejanie_powierzchni_plaskich" ||
              path === "/Offert/Oklejanie_pojazdow" ||
              path === "/Offert/Naklejki_i_etykiety"
                ? "base-scroll"
                : ""
            }
          >
            <p className="base-text" onClick={() => scroll.scrollToTop()}>
              Galeria
            </p>
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
