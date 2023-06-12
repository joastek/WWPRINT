import Image from "next/image";
import Image1 from "../../public/image 2.png";
import Image2 from "../../public/image 3.png";
import Image3 from "../../public/image 4.png";
import "../styles/Mainpage.scss";
import Offert from "@/components/Offert";
export default function Home() {
  return (
    <>
      <div className="mainpage_container">
        <div className="mainpage_fontcontainer">
          <div className="mainpage_Aboutfontcontainer">
            O naklejkach
            <br />
            wiemy <a>wszystko.</a>
          </div>
          <div className="mainpage_Whatfontcontainer">
            Oferujemy profesjonalne naklejki do ścian, okien i mebli, wykonane z
            dbałością o detale i estetykę. Dzięki naszym unikalnym wzorom i
            precyzji wykonania, wnętrza nabiorą stylowego i efektownego
            charakteru.
          </div>
          <button className="mainpage_button">Skontaktuj się!</button>
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
      </div>
      <Offert />
    </>
  );
}
