"use client";

import "../styles/components/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image5.png";
import Tile3 from "../../public/Pojazd.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
const Offert = () => {
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
            <div className="offert_tile1 element">
              {" "}
              <Image
                className="offert_image"
                src={Tile1}
                alt="Efekt wykonania oklejania balkonu"
              />
              <a>
                <br />
                Oklejanie <br />
                powierzchni
                <br />
                <a className="offert_Bluefont">płaskich.</a>
              </a>{" "}
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Naklejki_i_etykiety"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile2 element">
              <Image
                className="offert_image"
                src={Tile2}
                alt="Efekt wykonania naklejek i etykiet"
              />
              <a>
                <br />
                Wykonaywanie <br />
                <a className="offert_Bluefont">
                  naklejek i <br />
                  etykiet
                </a>
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
                <br />
                Oklejanie <br />
                Samochodów
              </a>
            </div>{" "}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Offert;
