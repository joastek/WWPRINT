"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Naklejki_i_etykiety/Naklejki_i_etykiety.scss";
import Link from "next/link";

import Tile2 from "../../../../public/image5.jpg";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { useTheme } from "next-themes";

const StickersAndLables = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        }}
        className="transition-colors duration-500"
      >
        <GalleryNavBar />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.6, 0.92, 0.6, 1.01],
          }}
          className="description_container"
        >
          {" "}
          <div className="naklejki_tiles">
            {" "}
            <div className="offert_tile2 ">
              <Link
                href="/Offert/Naklejki_i_etykiety/Naklejki_na_bialej_folii"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Image
                  className="offert_image"
                  src={Tile2}
                  alt="Efekt wykonania naklejek i etykiet"
                />
                <a className="whitefoil">
                  <br />
                  Naklejki na <br />
                  białej folii
                  <br />
                  błyszczącej/matowej
                </a>
              </Link>{" "}
            </div>{" "}
            <div className="offert_tile2 ">
              {" "}
              <Link
                href="/Offert/Naklejki_i_etykiety/Naklejki_holograficzne"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="video_container">
                  <video autoPlay muted loop className="video">
                    {" "}
                    <source src="/Kos.mp4" type="video/mp4" />
                  </video>
                </div>
                <a className="whitefoil">
                  <br />
                  Naklejki <br />
                  holograficzne
                </a>{" "}
              </Link>
            </div>{" "}
          </div>
        </motion.div>
      </div>
      ;
    </>
  );
};

export default StickersAndLables;
