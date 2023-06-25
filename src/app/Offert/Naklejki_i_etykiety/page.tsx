"use client";
import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import "../../../styles/pages/Offert/Naklejki_i_etykiety/Naklejki_i_etykiety.scss";
import IMAGES from "../../../components/Gallery/IMAGES";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
const StickersAndLables = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <GalleryNavBar />
      <motion.div
        className="Labels_container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <motion.div
        // whileTap={{
        //   scale: 1.8,
        //   width: 700,
        //   height: 700,
        //   originX: -0.7,
        //   originY: -0.2,
        // }}
        >
          <Image
            src={IMAGES.LABELS.image2.src}
            alt=""
            className="test"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div>
          <Image
            src={IMAGES.LABELS.image3.src}
            alt=""
            className="test"
            width={400}
            height={400}
          />
        </motion.div>
        <Image
          src={IMAGES.LABELS.image4.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image5.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image6.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image7.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image8.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image9.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image10.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image11.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image12.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image13.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image14.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image15.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image16.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image17.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image18.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image19.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image20.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image21.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image22.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image23.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image25.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image26.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image27.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image28.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image29.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />{" "}
        <Image
          src={IMAGES.LABELS.image31.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image32.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image33.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image34.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image35.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image36.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image37.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image38.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image39.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image41.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image42.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image43.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image44.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image45.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image46.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image47.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image48.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image49.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image50.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image51.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image52.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image53.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image54.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image55.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image56.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image57.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image58.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image59.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image60.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
        <Image
          src={IMAGES.LABELS.image61.src}
          alt=""
          className="test"
          width={400}
          height={400}
        />
      </motion.div>
    </>
  );
};

export default StickersAndLables;
