"use client";
import Link from "next/link";

import "../styles/components/Mainpage.scss";
import Offert from "@/components/Offert";
import { motion, useScroll } from "framer-motion";
import MainPage from "@/components/MainPage";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Script from "next/script";
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar "
        style={{ scaleX: scrollYProgress }}
      />
      <MainPage />

      <Offert />
      <Reviews />
      <About />
    </>
  );
}
