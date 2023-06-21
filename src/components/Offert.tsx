"use client";
import { useEffect } from "react";
import "../styles/components/Offert.scss";
import Image from "next/image";
import Tile1 from "../../public/Balkon.webp";
import Tile2 from "../../public/image5.png";
import Tile3 from "../../public/Pojazd.png";
import Link from "next/link";
const Offert = () => {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash === "#Offert") {
  //     const offertSection = document.getElementById("Offert");
  //     if (offertSection) {
  //       offertSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);
  return (
    <>
      <div
        className="offert_container"
        id="Offert"
        style={{ marginTop: "250px" }}
      >
        <h2>Oferta</h2>

        <div className="offert_tiles">
          <div className="offert_tile1">
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
          <div className="offert_tile2">
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
          <div className="offert_tile3">
            <Image
              className="offert_image"
              src={Tile3}
              alt="Efekt wykonania oklejania pojazdów"
            />
            <div className="test">
              <a>
                <br />
                Oklejanie <br />
                <a className="offert_Bluefont">pojazdów.</a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offert;
