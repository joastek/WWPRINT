import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "@/data/IMAGES";
import { useTheme } from "next-themes";

const MainPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
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

  return (
    <>
      <div className="mainpage_container  " id="MainPage">
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
          <div className="mainpage_fontcontainer ">
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
              <button
                className="mainpage_button"
                style={{
                  background: theme === "dark" ? "#fff" : "#000",
                  // color: theme === "dark" ? "#fff" : "#fff",
                }}
                data-theme={theme === "dark" ? "dark" : "light"}
              >
                Skontaktuj się!
              </button>
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
    </>
  );
};
export default MainPage;
