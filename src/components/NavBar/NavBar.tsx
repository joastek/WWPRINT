import "../../styles/NavBar.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <div className="navigationbar_container">
        <Image className="navigationbar_logo" src={logo} alt="Logo firmy" />

        <div className="navigationbar_content">
          <p>Strona główna</p>
          <p>Oferta</p>
          <p>O nas</p>
          <p>Kontakt</p>
        </div>

        <button className="navigationbar_button">
          <p>Zamów teraz!</p>
        </button>
      </div>
    </>
  );
};

export default NavBar;
