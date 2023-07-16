"use client";
// import "../../styles/components/Footer.scss";
import Image from "next/image";
import FacebookIcon from "../styles/icons/facebook.png";
import FacebookWhite from "../../public/FbWhite.png";
import InstagramIcon from "../styles/icons/instagram.png";
import instagramwhite from "../../public/Insgaramwhite.png";
import PhoneIcon from "../styles/icons/phone.png";
import whitePhoneIcon from "../../public/Phonewhite.png";
import MailIcon from "../styles/icons/mail.png";
import whiteIcon from "../../public/MessageWhite.png";
import Logoblack from "../../public/Logo.png";
import Logowhite from "../../public/Logowhite.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="footer_container ">
        <Image
          className="footer_logo"
          src={theme === "dark" ? Logowhite : Logoblack}
          alt="Logo firmy"
        />

        {/* // <Image src={Logo} alt="Logo firmy WWPrint" className="footer_logo" /> */}
        <div className="footer_contactbox">
          <div className="footer_icon">
            <div className="footer_icons">
              <Image
                src={theme === "dark" ? whitePhoneIcon : PhoneIcon}
                alt="Logo firmy"
              />
            </div>
            <a href="tel:517258986">+48 517 258 986</a> <br />
          </div>

          <div className="footer_icon">
            <div className="footer_icons">
              <Image
                src={theme === "dark" ? whiteIcon : MailIcon}
                alt="Logo firmy"
              />
            </div>
            <a href="mailto:biurowwprint@gmail.com">biurowwprint@gmail.com</a>{" "}
          </div>
        </div>
        <div className="footer_mediaicons">
          <motion.div whileHover={{ scale: 1.3 }} className="div">
            <Link
              href="https://www.facebook.com/Drukarniawwprint"
              target="_blank"
            >
              <Image
                src={theme === "dark" ? FacebookWhite : FacebookIcon}
                alt="Logo firmy"
                className="footer_mediaicon"
              />
            </Link>{" "}
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} className="div">
            {" "}
            <Link href="https://www.instagram.com/ww.print/" target="_blank">
              <Image
                src={theme === "dark" ? instagramwhite : InstagramIcon}
                alt="Logo firmy"
                className="footer_mediaicon"
              />
            </Link>{" "}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
