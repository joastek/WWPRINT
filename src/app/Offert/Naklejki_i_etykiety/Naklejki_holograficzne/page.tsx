import IMAGES from "../../../../components/IMAGES";
import "../../../../styles/pages/Offert/Naklejki_i_etykiety/subpages/Naklejki_holograficzne.scss";
import Image from "next/image";

import ReactPlayer from "react-player/lazy";

const holoGraphic = () => {
  return (
    <>
      <div className="hologram_container">
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
        <div className="pair">
          <video autoPlay muted loop className="video_hologram">
            {" "}
            <source
              src="/Oli.mp4"
              type="video/mp4"
              className="image_hologram"
            />
          </video>
          <Image
            src={IMAGES.Hologram.image3}
            alt="naklejka hologram"
            className="image_hologram"
          />
        </div>
        <div className="pair">
          <video autoPlay muted loop>
            {" "}
            <source src="/Vaper.mp4" type="video/mp4" />
          </video>
          <Image
            src={IMAGES.Hologram.image4}
            alt="naklejka hologram"
            className="image_hologram"
          />
        </div>
        <div className="pair">
          <video autoPlay muted loop>
            {" "}
            <source src="/Kos.mp4" type="video/mp4" />
          </video>
          <Image
            src={IMAGES.Hologram.image1}
            alt="naklejka hologram"
            className="image_hologram"
          />
        </div>
      </div>
    </>
  );
};

export default holoGraphic;
