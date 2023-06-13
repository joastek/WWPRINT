import Link from "next/link";
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
      </div>
      <Offert />
      <div className="mainpage_about_container">
        <h2>O nas</h2>
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
            Zaplanuj spotaknie już dziś!
          </button>{" "}
        </Link>
      </div>
    </>
  );
}
