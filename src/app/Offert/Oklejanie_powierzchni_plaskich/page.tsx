"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_powierzchni_plaskich/Oklejanie_powierzchni_plaskich.scss";
import IMAGES from "@/components/Gallery/IMAGES";
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
        className="Labels_container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <div className="container">
          <Swiper
            slidesPerView={1}
            rewind={true}
            centeredSlides={true}
            // slidesPerView={"auto"}
            autoHeight={true}
            spaceBetween={40}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <Image src={IMAGES.FLATS.image1} alt="" className="jpg1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image2} alt="" className="jpg2" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image3} alt="" className="jpg2" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image4} alt="" className="jpg1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image5} alt="" className="jpg1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image6} alt="" className="jpg1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image7} alt="" className="jpg1" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image src={IMAGES.FLATS.image8} alt="" className="jpg1" />
            </SwiperSlide>
          </Swiper>
          {/* <div className="box">
          <Image src={IMAGES.FLATS.image1} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image2} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image3} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image4} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image5} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image6} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image7} alt="" className="jpg" />
          <Image src={IMAGES.FLATS.image8} alt="" className="jpg" />
        </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default FlatSurface;
