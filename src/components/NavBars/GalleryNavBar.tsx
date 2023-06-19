import "../../styles/components/GalleryNavBar.scss";
import Link from "next/link";
const GalleryNavBar = () => {
  return (
    <>
      <div className="GalleryNavBar_container">
        <Link
          href="/Offert/Naklejki_i_etykiety"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <div className="GalleryNavBar_element">Naklejki i etykiety</div>
        </Link>
        <Link
          href="/Offert/Oklejanie_pojazdow"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <div
            className="GalleryNavBar_element"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Oklejanie powierzchni płaskich
          </div>
        </Link>

        <Link
          href="/Offert/Oklejanie_powierzchni_plaskich"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <div className="GalleryNavBar_element2">Oklejanie pojazdów</div>
        </Link>
      </div>
    </>
  );
};

export default GalleryNavBar;
