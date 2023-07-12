import IMAGES from "../../../../components/IMAGES";
import "../../../../styles/pages/Offert/Naklejki_i_etykiety/subpages/Naklejki_holograficzne.scss";
import Image from "next/image";
const holoGraphic = () => {
  return (
    <>
      <div className="hologram_container">
        <Image src={IMAGES.Hologram.image6} alt="" />
      </div>
    </>
  );
};

export default holoGraphic;
