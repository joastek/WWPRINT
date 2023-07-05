"use client";
import Link from "next/link";
import Image from "next/image";

import IMAGES from "@/components/Gallery/IMAGES";
import "../styles/components/Mainpage.scss";
import Offert from "@/components/Offert";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const image1 = {
    y: [0, -20, 0],
    transition: {
      y: {
        duration: 2.5,
        repeat: Infinity, // Powtarza animację w nieskończoność
        ease: "easeInOut",
      },
    },
  };
  const image2 = {
    y: [250, 220, 250],
    x: -155,
    transition: {
      y: {
        duration: 2.8,
        repeat: Infinity, // Powtarza animację w nieskończoność
        ease: "easeInOut",
      },
    },
  };
  const image3 = {
    y: [0, -20, 0],
    x: -325,
    transition: {
      y: {
        duration: 3.5,
        repeat: Infinity, // Powtarza animację w nieskończoność
        ease: "easeInOut",
      },
    },
  };
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="mainpage_container " id="MainPage">
        <motion.div
          className="mainpage_container "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.6, 0.92, 0.6, 1.01],
          }}
        >
          <div className="mainpage_fontcontainer">
            <div className="mainpage_Aboutfontcontainer">
              O foliach
              <br />
              wiemy <a>wszystko</a>
            </div>
            <div className="mainpage_Whatfontcontainer">
              Oferujemy profesjonalne naklejki do ścian, okien i mebli, wykonane
              z dbałością o detale i estetykę. Dzięki naszym unikalnym wzorom i
              precyzji wykonania, wnętrza nabiorą stylowego i efektownego
              charakteru.
            </div>
            <Link href="/Contact">
              <button className="mainpage_button">Skontaktuj się!</button>
            </Link>
          </div>
          <div className="mainpage_imageContainer">
            <motion.div className="div" animate={image1}>
              <Image
                src={IMAGES.LABELS.image32}
                alt="Design jednej z wykonanych naklejek"
                className="mainpage_image1"
              />
            </motion.div>
            <motion.div className="div2" animate={image2}>
              <Image
                src={IMAGES.LABELS.image54}
                alt="Design jednej z wykonanych naklejek"
                className="mainpage_image2"
              />
            </motion.div>
            <motion.div className="div1" animate={image3}>
              <Image
                src={IMAGES.LABELS.image55}
                alt="Design jednej z wykonanych naklejek"
                className="mainpage_image3"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Offert />
      <motion.div
        className="mainpage_about_container "
        id="About"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <h2>O nas</h2>
        <div className="mainpage_about_description">
          WWPrint to dynamiczna drukarnia założona przez braci bliźniaków,
          Piotra i Tomasza. Firma specjalizuje się w kompleksowej obsłudze
          drukarskiej dla firm, agencji reklamowych oraz klientów
          indywidualnych. Oferuje szeroki wybór produktów i usług, takich jak
          ulotki, plakaty, wizytówki, etykiety, naklejki samoprzylepne,
          oklejanie witryn i pojazdów, oraz wiele innych. Piotr przynosi do
          firmy swoje doświadczenie w branży reklamowej, co pozwala na
          świadczenie profesjonalnego doradztwa w zakresie projektowania
          graficznego i strategii reklamowej. Tomasz natomiast jest ekspertem w
          dziedzinie druku i produkcji, posiadając głęboką wiedzę techniczną
          oraz śledząc najnowsze trendy i technologie. WWPrint kładzie nacisk na
          profesjonalizm, jakość i terminowość zleceń, współpracując jedynie z
          zaufanymi dostawcami materiałów. Bracia bliźniacy zapewniają
          indywidualne podejście do klientów i pełne zaangażowanie w realizację
          zleceń. Firma WWPrint stale doskonali swoje umiejętności, śledząc
          najnowsze trendy i uczestnicząc w szkoleniach oraz konferencjach.
          Dzięki temu są w stanie oferować innowacyjne rozwiązania, które
          spełniają oczekiwania nawet najbardziej wymagających klientów. WWPrint
          to nie tylko drukarnia, ale również partner biznesowy, który wspiera
          klientów w promocji marki i osiąganiu sukcesu.
        </div>
        <div className="mainpage_about_Aboutfontcontainer">
          100% gwarantowanej <a>satysfakcji</a>
        </div>
        <Link href="/Contact" style={{ textDecoration: "none" }}>
          <button className="mainpage_button">
            Zaplanuj spotkanie już dziś!
          </button>
        </Link>
      </motion.div>
    </>
  );
}
