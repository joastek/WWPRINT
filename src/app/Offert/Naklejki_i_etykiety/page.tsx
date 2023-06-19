import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Naklejki_i_etykiety/Naklejki_i_etykiety.scss";
import IMAGES from "../../../components/Gallery/IMAGES";
const StickersAndLables = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="Labels_container">
        <img src={IMAGES.LABELS.image1.src} alt="" />
        <img src={IMAGES.LABELS.image2.src} alt="" />
      </div>
    </>
  );
};

export default StickersAndLables;
