import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_powierzchni_plaskich/Oklejanie_powierzchni_plaskich.scss";
import IMAGES from "@/components/Gallery/IMAGES";
import Image from "next/image";
const FlatSurface = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="container">
        <div className="box">
          <Image src={IMAGES.FLATS.image1} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image2} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image3} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image4} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image5} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image6} alt="" className="jpg" />

          <Image src={IMAGES.FLATS.image7} alt="" className="jpg" />
          <Image src={IMAGES.FLATS.image8} alt="" className="jpg" />
        </div>
      </div>
    </>
  );
};

export default FlatSurface;
