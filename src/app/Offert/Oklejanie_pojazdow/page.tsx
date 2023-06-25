"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_pojazdow/Oklejanie_pojazdow.scss";
import IMAGES from "@/components/Gallery/IMAGES";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
const CarsStickers = () => {
  const [position, setPosition] = useState(0);
  return (
    <>
      <GalleryNavBar />
      <div className="container">
        <motion.div
          className="box"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            rotate: 0,
            left: `${position * 60 - 30}vw`,
            scale: 1,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Image
            src={IMAGES.CARS.image2}
            alt=""
            width={370}
            height={700}
            className="vertical"
          />
        </motion.div>
        <Image
          src={IMAGES.CARS.image1}
          alt=""
          width={700}
          height={330}
          className="level"
        />
        <Image
          src={IMAGES.CARS.image3}
          alt=""
          width={700}
          height={350}
          className="level"
        />

        <Image
          src={IMAGES.CARS.image4}
          alt=""
          width={370}
          height={700}
          className="vertical_end"
        />
      </div>
    </>
  );
};

export default CarsStickers;
