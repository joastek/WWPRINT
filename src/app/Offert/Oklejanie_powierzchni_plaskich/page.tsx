"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_powierzchni_plaskich.scss";
import IMAGES from "@/data/IMAGES";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
const FlatSurface = () => {
  return (
    <>
      <GalleryNavBar />
      <motion.div
        className="flat_container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <Image src={IMAGES.FLATS.image1} alt="" className="jpg" />
        <div className="box">
          <Image src={IMAGES.FLATS.image3} alt="" className="jpg_tiny" />

          <Image src={IMAGES.FLATS.image2} alt="" className="jpg_tiny" />
        </div>
        <div className="box">
          <Image src={IMAGES.FLATS.image6} alt="" className="jpg_smoth" />

          <Image src={IMAGES.FLATS.image8} alt="" className="jpg_smoth" />
        </div>
        <Image src={IMAGES.FLATS.image7} alt="" className="jpg" />
        <div className="box">
          <Image src={IMAGES.FLATS.image4} alt="" className="jpg_smoth" />
          <Image src={IMAGES.FLATS.image5} alt="" className="jpg_smoth" />{" "}
        </div>
        <div className="box">
          <Image src={IMAGES.FLATS.image9} alt="" className="jpg_threerow" />{" "}
          <Image src={IMAGES.FLATS.image10} alt="" className="jpg_threerow" />{" "}
          <Image src={IMAGES.FLATS.image11} alt="" className="jpg_threerow" />{" "}
        </div>
      </motion.div>
    </>
  );
};

export default FlatSurface;
