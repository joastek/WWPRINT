"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Naklejki_i_etykiety/Naklejki_i_etykiety.scss";
import Link from "next/link";
import Tile1 from "../../../public/Balkon.webp";
import Tile2 from "../../../../public/image5.png";

import gif from "../../../../public/gallery_images/Hologram/videos/KOS.gif.gif";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
const StickersAndLables = () => {
  return (
    <>
      <GalleryNavBar />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
        className="description_container"
      >
        {" "}
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
        Wspomożemy Cię w dopracowaniu projektu i samej naklejki. Naklejki na
        białej folii to cena 69,00 zł za 1m2 naklejek, np. wielkość 5 cm to
        około 230 sztuk. W tej cenie zawarte są: druk naklejek oraz wycięcie po
        obrysie. O wielkości naklejek decydujesz sam. Dodatkowo, za dodatkową
        opłatą 15,00 zł, możemy je także wyciąć na pojedyncze sztuk. 🎉
        <div className="naklejki_tiles">
          <Link
            href="/Offert/Naklejki_i_etykiety/Naklejki_na_bialej_folii"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile2 element">
              <Image
                className="offert_image"
                src={Tile2}
                alt="Efekt wykonania naklejek i etykiet"
              />
              <a className="whitefoil">
                <br />
                Naklejki na <br />
                białej folii
                <br />
                błyszczącej/matowej
              </a>
            </div>{" "}
          </Link>
          <Link
            href="/Offert/Naklejki_i_etykiety/Naklejki_holograficzne"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="offert_tile2 element">
              <div className="video_container">
                <video autoPlay muted loop className="video">
                  {" "}
                  <source src="/Kos.mp4" type="video/mp4" />
                </video>
              </div>
              <a className="whitefoil">
                <br />
                Naklejki <br />
                holograficzne
              </a>
            </div>{" "}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default StickersAndLables;
