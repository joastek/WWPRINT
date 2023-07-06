"use client";

import "../styles/components/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image5.png";
import Tile3 from "../../public/Pojazd.jpg";
import Tile4 from "../../public/Plakaty.png";
import Tile5 from "../../public/RollUp.png";
import Tile6 from "../../public/Tabliczki.png";
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
            <div className="offert_tile3 element">
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
                płaskich
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
                <br />
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
              {/* <Image
                className="hover_image"
                src={Tile5}
                alt="Efekt wykonania naklejek i etykiet"
              /> */}
              <a>
                <br />
                Plakaty
              </a>
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
              <a>
                <br />
                Roll up
              </a>
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
                <br />
                Tabliczki
              </a>
            </div>{" "}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Offert;
