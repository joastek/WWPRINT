"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Oklejanie_pojazdow.scss";
import IMAGES from "@/data/IMAGES";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
const FlatSurface = () => {
  return (
    <>
      <GalleryNavBar />

      <motion.div
        className="car_container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <div className="description_container">
          Z przyjemnością przedstawiamy naszą ofertę na usługę oklejania
          pojazdów folią samoprzylepną. Jesteśmy doświadczoną firmą
          specjalizującą się w profesjonalnym nadawaniu nowego wyglądu i
          ochronie samochodów, motocykli oraz innych pojazdów za pomocą wysokiej
          jakości folii samoprzylepnej. <br />
          <div className="description_space"> Nasza oferta obejmuje:</div>
          <br />
          <ol>
            {" "}
            <li>
              Projektowanie grafiki: Nasz zespół grafików i projektantów pomoże
              w stworzeniu oryginalnej i atrakcyjnej grafiki dla Państwa
              pojazdu. Możemy zaprojektować logo, napisy, wzory i inne elementy
              graficzne, które idealnie odzwierciedlą Państwa markę, styl lub
              osobiste preferencje.
            </li>{" "}
            <li>
              klejanie pojazdu: Nasi wykwalifikowani i doświadczeni montażyści
              folii samoprzylepnej zadbają, aby aplikacja folii była wykonana
              precyzyjnie i starannie. Używamy najnowocześniejszych technik i
              narzędzi, aby zapewnić idealne dopasowanie folii do kształtu i
              powierzchni pojazdu.
            </li>{" "}
            <li>
              O Wysokiej jakości folie: W naszej ofercie posiadamy szeroki wybór
              folii samoprzylepnych o różnych fakturach, kolorach i efektach,
              takich jak matowe, błyszczące, a także specjalne folie odbijające
              światło. Wszystkie folie, których używamy, są renomowanych
              producentów i cechują się wysoką trwałością, odpornością na
              warunki atmosferyczne.
            </li>{" "}
            <li>
              Usuwanie folii: W razie potrzeby zajmujemy się również usuwaniem
              folii samoprzylepnej z pojazdów.
            </li>{" "}
            <li>
              {" "}
              Indywidualne podejście i konkurencyjne ceny: Rozumiemy, że każdy
              projekt jest wyjątkowy, dlatego oferujemy indywidualne podejście
              do potrzeb i oczekiwań naszych klientów. Nasze ceny są
              konkurencyjne, a jednocześnie dostosowane do zakresu prac i
              rodzaju folii.
            </li>
          </ol>{" "}
          <div className="description_spacebetween">
            {" "}
            Zaufało nam wiele zadowolonych klientów, zarówno indywidualnych jak
            i firmowych, które widziały korzyści płynące z oklejenia swoich
            pojazdów folią samoprzylepną. Nasze usługi są doskonałym sposobem na
            wyróżnienie się na drodze, budowanie marki. <br />
          </div>
          Jeśli są Państwo zainteresowani naszą ofertą na oklejanie pojazdów
          folią samoprzylepną, zachęcamy do kontaktu. Nasz zespół chętnie
          odpowie na wszystkie pytania, udzieli szczegółowych informacji i
          przedstawi indywidualną wycenę dostosowaną do Państwa potrzeb.
          Dziękujemy za zainteresowanie naszymi usługami i czekamy na Państwa
          wiadomość lub telefon.
        </div>
        <div className="box">
          <Image src={IMAGES.CARS.image1} alt="" className="level" />
          <Image src={IMAGES.CARS.image2} alt="" className="vertical" />
        </div>{" "}
        <div className="box">
          <Image src={IMAGES.CARS.image3} alt="" className="level" />
          <Image src={IMAGES.CARS.image4} alt="" className="vertical1" />{" "}
        </div>
      </motion.div>
    </>
  );
};

export default FlatSurface;
