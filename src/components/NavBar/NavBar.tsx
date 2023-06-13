import "../../styles/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <div className="navigationbar_container">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />
        </Link>
        <div className="navigationbar_content">
          <Link href="/" style={{ textDecoration: "none" }}>
            <p>Strona główna</p>
          </Link>
          <p>Oferta</p>
          <p>O nas</p>
          <Link href="/Contact" style={{ textDecoration: "none" }}>
            <p>Kontakt</p>
          </Link>
        </div>
        <Link href="/Contact">
          <button className="navigationbar_button">
            <p>Zamów teraz!</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
