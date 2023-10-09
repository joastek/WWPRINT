"use client";
import Link from "next/link";

import "../styles/components/Mainpage.scss";
import Offert from "@/components/Offert";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import MainPage from "@/components/MainPage";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import { useTheme } from "next-themes";
import Providers from "@/components/darkMode";

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const { systemTheme, theme, setTheme } = useTheme();

  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const isSmallScreen = window.innerWidth <= 1357;
  const animateVariant = isSmallScreen ? "hidden" : "visible";
  return (
    <>
      {" "}
      <div
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        }}
        className="transition-colors duration-500"
      >
        <motion.div
          variants={{
            visible: { y: isSmallScreen ? "0rem" : "12rem" },
            hidden: { y: isSmallScreen ? "0rem" : "0rem" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="progress-bar "
          style={{
            scaleX: scrollYProgress,
            backgroundColor: theme === "dark" ? "#fff" : "#000",
          }}
        />
        <MainPage />

        <Offert />
        <Reviews />
        <About />
      </div>
    </>
  );
}
