"use client";
import IMAGES from "../../../../components/IMAGES";
import "../../../../styles/pages/Offert/Naklejki_i_etykiety/subpages/Naklejki_holograficzne.scss";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../../../public/Arrow.png";
import whitearrow from "../../../../../public/AroowWhite.png";
import { useTheme } from "next-themes";

const holoGraphic = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="hologram_container">
        <Link href="/Offert/Naklejki_i_etykiety">
          {" "}
          <Image
            src={theme === "dark" ? whitearrow : arrow}
            alt="Logo firmy"
            className="arrow"
          />
        </Link>
        Oferujemy druk naklejek/etykiet samoprzylepnych, które mogą posłużyć
        jako doskonała reklama Twoich mediów społecznościowych. Nasze naklejki
        to nie tylko reklama, ale również oryginalny gadżet dla Twoich klientów.
        Wyobraź sobie, że tworzymy unikalną naklejkę z reklamą Twojego
        Instagrama, którą Twoi klienci mogą nakleić na takie przedmioty jak
        laptop, kubek termiczny, tablet, samochód czy inne miejsca widoczne dla
        innych.To świetny sposób na promocję Ciebie lub Twojego produktu!
        <div className="description_space">
          Mamy do wyboru różne rodzaje materiałów: białą matową/błyszczącą
          folię, holograficzną folię, papier i inne.{" "}
        </div>{" "}
        Wspomożemy Cię w dopracowaniu projektu i samej naklejki.
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
