"use client";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image1 from "../../public/image2.png";
import Image2 from "../../public/image3.png";
import Image3 from "../../public/image4.png";
import "../styles/components/Mainpage.scss";
import Offert from "@/components/Offert";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="mainpage_container" id="MainPage">
        <motion.div
          className="mainpage_container"
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
              O naklejkach
              <br />
              wiemy <a>wszystko.</a>
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
            <Image
              src={Image1}
              alt="Design jednej z wykonanych naklejek"
              className="mainpage_image1"
            />
            <Image
              src={Image2}
              alt="Design jednej z wykonanych naklejek"
              className="mainpage_image2"
            />
            <Image
              src={Image3}
              alt="Design jednej z wykonanych naklejek"
              className="mainpage_image3"
            />
          </div>
        </motion.div>
      </div>
      <Offert />
      <div className="mainpage_about_container">
        <h2 id="About">O nas</h2>
        <div className="mainpage_about_description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className="mainpage_about_Aboutfontcontainer">
          100% gwarantowanej <a>satysfakcji.</a>
        </div>
        <Link href="/Contact" style={{ textDecoration: "none" }}>
          <button className="mainpage_button">
            Zaplanuj spotkanie już dziś!
          </button>
        </Link>
      </div>
    </>
  );
}
