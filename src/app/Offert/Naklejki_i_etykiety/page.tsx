import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Naklejki_i_etykiety/Naklejki_i_etykiety.scss";
import IMAGES from "../../../components/Gallery/IMAGES";
import Image from "next/image";
import test from "../../../../public/gallery_images/anitrochepiercing-2.png";
const StickersAndLables = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="Labels_container">
        <Image
          src={IMAGES.LABELS.image1.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image2.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        {/* <img src={IMAGES.LABELS.image2.src} alt="" />
        <img src={IMAGES.LABELS.image2.src} alt="" />
        <img src={IMAGES.LABELS.image2.src} alt="" /> */}
      </div>
    </>
  );
};

export default StickersAndLables;
