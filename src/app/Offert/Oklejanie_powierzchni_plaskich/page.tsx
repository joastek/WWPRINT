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
const FlatSurface = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="container">
        <Swiper
          rewind={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoHeight={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="box"
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
    </>
  );
};

export default FlatSurface;
