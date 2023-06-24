import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_pojazdow/Oklejanie_pojazdow.scss";
import IMAGES from "@/components/Gallery/IMAGES";
import Image from "next/image";
const CarsStickers = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="container">
        <div className="box">
          <Image
            src={IMAGES.CARS.image2}
            alt=""
            width={370}
            height={700}
            className="vertical"
          />

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
      </div>
    </>
  );
};

export default CarsStickers;
