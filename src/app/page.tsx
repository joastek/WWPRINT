"use client";
import Link from "next/link";

import "../styles/components/Mainpage.scss";
import Offert from "@/components/Offert";
import { motion, useScroll } from "framer-motion";
import MainPage from "@/components/MainPage";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import { useTheme } from "next-themes";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();
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
