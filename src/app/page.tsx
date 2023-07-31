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
      <Script
        id="Absence-banner"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=AW-11277230973`}
        crossOrigin="anonymous"
      />
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
