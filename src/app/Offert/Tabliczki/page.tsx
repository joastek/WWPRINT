import GalleryNavBar from "@/components/NavBars/GalleryNavBar";
import IMAGES from "@/components/IMAGES";
import Image from "next/image";
import "@/styles/pages/Offert/Tabliczki.scss";
const Plates = () => {
  return (
    <>
      <GalleryNavBar />
      <div className="plates_position">
        <div className="plates_description">
          Zapraszamy do skorzystania z naszych tabliczek na PVC! Dlaczego warto
          wybrać nasze tabliczki?{" "}
          <ul>
            <li>Trwałość i odporność.</li>
            <li>Dostosowanie rozmiaru i kształtu.</li>{" "}
            <li> Łatwa instalacja i demontaż.</li> <li>Wielofunkcyjność.</li>
          </ul>
          Skontaktuj się z nami, aby zamówić swoje tabliczki na PVC i skorzystać
          z naszego doświadczenia w dziedzinie reklamy.
        </div>
        <div className="plates_images_position">
          <Image src={IMAGES.Plates.image3} alt="" className="plate_image" />
          <Image src={IMAGES.Plates.image4} alt="" className="plate_image" />
          <Image src={IMAGES.Plates.image1} alt="" className="plate_image1" />
          <Image src={IMAGES.Plates.image2} alt="" className="plate_image1" />
        </div>
        <Image src={IMAGES.Plates.image5} alt="" className="plate_image2" />
      </div>
    </>
  );
};

export default Plates;
