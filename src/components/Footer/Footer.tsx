"use client";
import "../../styles/components/Footer.scss";
import Image from "next/image";
import FacebookIcon from "../../styles/icons/facebook.png";
import InstagramIcon from "../../styles/icons/instagram.png";
import PhoneIcon from "../../styles/icons/phone.png";
import MailIcon from "../../styles/icons/mail.png";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <Image src={Logo} alt="Logo firmy WWPrint" className="footer_logo" />
        <div className="footer_contactbox">
          <div className="footer_icon">
            <div className="footer_icons">
              <Image src={PhoneIcon} alt="Ikona telefonu" />
            </div>
            <a>+48 517 258 986</a> <br />
          </div>

          <div className="footer_icon">
            <div className="footer_icons">
              <Image
                src={MailIcon}
                alt="Ikona wiadmości mail"
                className="footer_icon"
              />{" "}
            </div>
            <a>biurowwprint@gmail.com</a>{" "}
          </div>
        </div>
        <div className="footer_mediaicons">
          <motion.div whileHover={{ scale: 1.3 }} className="div">
            <Link
              href="https://www.facebook.com/Drukarniawwprint"
              target="_blank"
            >
              <Image
                src={FacebookIcon}
                alt="Ikona prowadząca do witryny facebook firmy"
                className="footer_mediaicon"
              />
            </Link>{" "}
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} className="div">
            {" "}
            <Link href="https://www.instagram.com/ww.print/" target="_blank">
              <Image
                src={InstagramIcon}
                alt="Ikona prowadząca do witryny instagram firmy"
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
