import "../../styles/components/Footer.scss";
import Image from "next/image";
import FacebookIcon from "../../styles/icons/facebook.png";
import InstagramIcon from "../../styles/icons/instagram.png";
import PhoneIcon from "../../styles/icons/phone.png";
import MailIcon from "../../styles/icons/mail.png";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_contactbox">
          <Image src={Logo} alt="Logo firmy WWPrint" />
          <div className="footer_icon">
            <Image src={PhoneIcon} alt="Ikona telefonu" />
            <a>+48 517 258 986</a> <br />
          </div>

          <div className="footer_icon">
            <Image
              src={MailIcon}
              alt="Ikona wiadmości mail"
              className="footer_icon"
            />{" "}
            <a>biurowwprint@gmail.com</a>{" "}
          </div>
        </div>
        <div className="footer_mediaicons">
          <Link
            href="https://www.facebook.com/Drukarniawwprint"
            target="_blank"
          >
            <Image
              src={FacebookIcon}
              alt="Ikona prowadząca do witryny facebook firmy"
              className="footer_mediaicon"
            />
          </Link>
          <Link href="https://www.instagram.com/ww.print/" target="_blank">
            <Image
              src={InstagramIcon}
              alt="Ikona prowadząca do witryny instagram firmy"
              className="footer_mediaicon"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
