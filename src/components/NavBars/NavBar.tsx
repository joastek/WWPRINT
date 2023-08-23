"use client";
// import "../../styles/components/NavBar.scss";
import logo from "../../../public/Logo.png";
import logowhite from "../../../public/Logowhite.png";
import Image from "next/image";
import NavLink from "next/link";
import sun from "../../../public/sun.png";
import moon from "../../../public/moon.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import PhoneToggle from "./PhoneToggle";
import { useTheme } from "next-themes";
const NavBar = () => {
  const path = usePathname();
  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navBarRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
        className={`navigationbar_container ${
          isActive ? "active" : ""
        } transition-colors duration-500`}
        ref={navBarRef}
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        }}
      >
        <NavLink href="/" style={{ textDecoration: "none" }}>
          {theme === "dark" ? (
            <Image
              onClick={() => scroll.scrollToTop()}
              className="navigationbar_logo"
              src={logowhite}
              alt="Logo firmy"
            />
          ) : (
            <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
          )}
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
            <motion.div
              className="base-text"
              onClick={() => scroll.scrollToTop()}
              style={{
                color:
                  theme === "dark" || window.innerWidth <= 900
                    ? "#fff"
                    : "#000",
              }}
            >
              {" "}
              <NavLink
                href="/"
                style={{ textDecoration: "none" }}
                onClick={handleToggleClick}
              >
                Strona główna
              </NavLink>{" "}
            </motion.div>
          </ScrollLink>
          {/* ///////////////////////////////////////// */}

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
            <NavLink href="/#Oferta">
              <div
                className="base-text"
                style={{
                  color:
                    theme === "dark" || window.innerWidth <= 900
                      ? "#fff"
                      : "#000",
                  textDecoration: "none",
                }}
              >
                {" "}
                Oferta
              </div>
            </NavLink>
          </ScrollLink>

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
            {" "}
            <div>
              <NavLink
                href="/#About"
                // style={{ textDecoration: "none" }}
              >
                <div
                  className="base-text"
                  style={{
                    color:
                      theme === "dark" || window.innerWidth <= 900
                        ? "#fff"
                        : "#000",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  O nas{" "}
                </div>
              </NavLink>
            </div>
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
            <div
              className="base-text"
              style={{
                color:
                  theme === "dark" || window.innerWidth <= 850
                    ? "#fff"
                    : "#000",
              }}
            >
              Kontakt
            </div>
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
            <div
              className="base-text"
              onClick={() => scroll.scrollToTop()}
              style={{
                color:
                  theme === "dark" || window.innerWidth <= 850
                    ? "#fff"
                    : "#000",
              }}
            >
              Galeria
            </div>
          </NavLink>
        </motion.div>{" "}
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <Image src={sun} alt="" className="sun" />
          ) : (
            <Image src={moon} alt="" className="moon" />
          )}
        </div>
        <NavLink href="/Contact">
          <button className="navigationbar_button">
            <div>Zamów teraz!</div>
          </button>
        </NavLink>
      </motion.div>
    </>
  );
};

export default NavBar;
