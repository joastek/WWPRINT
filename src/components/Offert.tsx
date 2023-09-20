"use client";
import React, { useState } from "react";
import "../styles/components/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image5.jpg";
import Tile3 from "../../public/Pojazd.jpg";
import Tile4 from "../../public/Plakaty.jpg";
import Tile5 from "../../public/RollUp.png";
import Tile6 from "../../public/Tabliczki.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Offert = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const fadeInOutAnimation = {};
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
        className="offert_container "
        id="Oferta"
      >
        <h1
          style={{
            borderBottom:
              theme === "dark" ? "3px solid #fff" : "3px solid #000",
          }}
        >
          Oferta
        </h1>

        <div className="offert_tiles">
          <Link
            href="/Offert/Oklejanie_powierzchni_plaskich"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              {" "}
              <Image
                className="offert_image"
                src={Tile1}
                alt="Efekt wykonania oklejania balkonu"
              />
              <div className="offert_description">
                <a>
                  Oklejanie <br />
                  powierzchni
                </a>{" "}
              </div>
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Naklejki_i_etykiety"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              <Image
                className="offert_image"
                src={Tile2}
                alt="Efekt wykonania naklejek i etykiet"
                style={{ scale: 1.15 }}
              />
              <div className="offert_description">
                <a>
                  Naklejki i <br />
                  etykiety
                </a>
              </div>
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Oklejanie_pojazdow"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              <Image
                className="offert_image"
                src={Tile3}
                alt="Efekt wykonania naklejek i etykiet"
              />{" "}
              <div className="offert_description">
                {" "}
                <a>
                  Oklejanie <br />
                  Pojazdów
                </a>{" "}
              </div>
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Plakaty"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              <Image
                className="offert_image"
                src={Tile4}
                alt="Efekt wykonania plakatu"
              ></Image>
              <div className="offert_description">
                {" "}
                <a>Plakaty</a>
              </div>
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Roll_up"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              <Image
                className="offert_image"
                src={Tile5}
                alt="Efekt wykonania roll up"
              />{" "}
              <div className="offert_description">
                {" "}
                <a>Roll up</a>{" "}
              </div>{" "}
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Tabliczki"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              <Image
                className="offert_image"
                src={Tile6}
                alt="Efekt wykonania tabliczek"
              />{" "}
              <div className="offert_description">
                {" "}
                <a>
                  Szyldy <br />
                  reklamowe
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Offert;
