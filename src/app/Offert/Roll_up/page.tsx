import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "@/styles/pages/Offert/Rollup.scss";
import IMAGES from "@/data/IMAGES";
import Image from "next/image";
const RollUp = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="poster_container">
        Zapraszamy do skorzystania z naszych profesjonalnych kaset Roll Up!
        Nasze kasy są trwałe, praktyczne i personalizowalne. Dlaczego warto
        wybrać nasze kasy Roll Up?
        <ol>
          {" "}
          <li>Wyjątkowa jakość.</li>
          <li>Personalizacja z logo i grafiką.</li>
          <li>Łatwa przenośność.</li>
          <li>Prosty montaż.</li>
          <li>Wielofunkcyjność.</li>
        </ol>
        <div className="second_part">
          Oferujemy różne szerokości kaset Roll Up, aby spełnić Twoje potrzeby:{" "}
          <ul>
            {" "}
            <li>
              {" "}
              Kasety o szerokości 85 cm: Idealne do mniejszych przestrzeni,
              takich jak stoiska targowe czy wnętrza sklepów.
            </li>
            <li>
              {" "}
              Kasety o szerokości 100 cm: Doskonałe do standardowych prezentacji
              i wystaw.
            </li>
            <li>
              {" "}
              120 cm: Zapewniają większą powierzchnię do wyeksponowania treści,
              idealne dla bardziej rozbudowanych projektów.
            </li>
            Kasety o szerokości
          </ul>
          Skontaktuj się z nami, aby zamówić swoją kasę Roll Up o preferowanej
          szerokości i wzmocnić swoją markę.
        </div>
        <Image
          src={IMAGES.RollUp.image1}
          alt="Fotografia RollUp"
          className="RollUp_image"
        />
      </div>
    </>
  );
};

export default RollUp;
