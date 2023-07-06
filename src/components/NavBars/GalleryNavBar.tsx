"use client";
import "../../styles/components/GalleryNavBar.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
const GalleryNavBar = () => {
  const path = usePathname();
  return (
    <>
      <div className="GalleryNavBar_position">
        <div className="GalleryNavBar_container">
          <Link
            href="/Offert/Naklejki_i_etykiety"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <div
              className={
                path === "/Offert/Naklejki_i_etykiety"
                  ? "active"
                  : "GalleryNavBar_element"
              }
            >
              Naklejki i etykiety
            </div>
          </Link>

          <Link
            href="/Offert/Oklejanie_pojazdow"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <div
              className={
                path === "/Offert/Oklejanie_pojazdow"
                  ? "active"
                  : "GalleryNavBar_element"
              }
              style={{ textDecoration: "none" }}
            >
              {" "}
              Oklejanie pojazdów
            </div>
          </Link>

          <Link
            href="/Offert/Oklejanie_powierzchni_plaskich"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <div
              className={
                path === "/Offert/Oklejanie_powierzchni_plaskich"
                  ? "active"
                  : "GalleryNavBar_element"
              }
            >
              {" "}
              Oklejanie powierzchni płaskich
            </div>
          </Link>
          <Link href="/Offert/Plakaty" style={{ textDecoration: "none" }}>
            {" "}
            <div
              className={
                path === "/Offert/Plakaty" ? "active" : "GalleryNavBar_element"
              }
            >
              {" "}
              Plakaty
            </div>
          </Link>
          <Link href="/Offert/Roll_up" style={{ textDecoration: "none" }}>
            {" "}
            <div
              className={
                path === "/Offert/Roll_up" ? "active" : "GalleryNavBar_element"
              }
            >
              {" "}
              Roll up
            </div>
          </Link>
          <Link href="/Offert/Tabliczki" style={{ textDecoration: "none" }}>
            {" "}
            <div
              className={
                path === "/Offert/Tabliczki"
                  ? "active"
                  : "GalleryNavBar_element"
              }
            >
              {" "}
              Tabliczki
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GalleryNavBar;
