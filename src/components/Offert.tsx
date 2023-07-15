"use client";
import React, { useState } from "react";
import "../styles/components/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image5.png";
import Tile3 from "../../public/Pojazd.jpg";
import Tile4 from "../../public/Plakaty.png";
import Tile5 from "../../public/RollUp.png";
import Tile6 from "../../public/Tabliczki.png";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const Offert = () => {
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
        <h2>Oferta</h2>

        <div className="offert_tiles">
          <Link
            href="/Offert/Oklejanie_powierzchni_plaskich"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile3 element">
              {" "}
              <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                transition={{ duration: 1 }}
              >
                <Image
                  className="offert_image"
                  src={Tile1}
                  alt="Efekt wykonania oklejania balkonu"
                />
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 2 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    <Image
                      className="offert_image4"
                      src={Tile2}
                      alt="Efekt wykonania oklejania balkonu"
                    />
                  </motion.div>
                )}
              </motion.div>
              <a>
                Oklejanie <br />
                powierzchni
              </a>{" "}
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
              />
              <a>
                Naklejki i <br />
                etykiet
              </a>
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
              />
              <a>
                Oklejanie <br />
                Samochodów
              </a>
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

              <a>Plakaty</a>
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
              />
              <a>Roll up</a>
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
              />
              <a>
                Szyldy <br />
                reklamowe
              </a>
            </div>{" "}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Offert;
