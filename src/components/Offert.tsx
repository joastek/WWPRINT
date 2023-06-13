import "../styles/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image 5.png";
import Tile3 from "../../public/Pojazd.png";
import Link from "next/link";
const Offert = () => {
  return (
    <>
      <div className="offert_container">
        <h2>Oferta</h2>

        <div className="offert_tiles">
          <div className="offert_tile">
            <Link href="/Offert/Oklejanie">
              {" "}
              <Image
                className="offert_image"
                src={Tile1}
                alt="Efekt wykonania oklejania balkonu"
              />
            </Link>

            <a>
              <br />
              Oklejanie <br />
              powierzchni
              <br />
              <a className="offert_Bluefont">płaskich.</a>
            </a>
          </div>
          <div className="offert_tile">
            <Image
              className="offert_image"
              src={Tile2}
              alt="Efekt wykonania naklejek i etykiet"
            />
            <a>
              <br />
              Wykonanie <br />
              <a className="offert_Bluefont">
                naklejek i <br />
                etykiet
              </a>
            </a>
          </div>
          <div className="offert_tile">
            <Image
              className="offert_image"
              src={Tile3}
              alt="Efekt wykonania oklejania pojazdów"
            />
            <a>
              <br />
              Oklejanie <br />
              <a className="offert_Bluefont">pojazdów.</a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offert;
