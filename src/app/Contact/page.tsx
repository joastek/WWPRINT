"use client";
import "../../styles/pages/Contact/Contact.scss";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Check from "../../../public/check.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import PhoneIcon from "../../styles/icons/phone.png";
import MailIcon from "../../styles/icons/mail.png";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const path = usePathname();
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showModal) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [showModal]);

  useEffect(() => {
    if (countdown === 0) {
      path === "/";
    }
  }, [countdown]);
  const clearFields = () => {
    if (form.current) {
      form.current.reset(); // Resetowanie zawartości formularza
    }
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_los0ify",
        "template_j8mzea2",
        form.current!,
        "aWToZai0hlr-ICeFx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          clearFields();
          setTimeout(() => {
            window.location.href = "/";
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  /// Disabled button
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setValid] = useState<boolean>(false);
  const validate = () => {
    return fname.length > 0 && email.length > 0 && message.length > 0;
  };
  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [fname, email, message]);
  return (
    <>
      {showModal && (
        <div className="modalBox_container ">
          <div className="modalBox">
            <div className="text_container">
              <div className="text">Wiadomośc została pomyślnie wysłana! </div>{" "}
              <Image className="Logo" src={Check} alt=""></Image>
              <div className="text_area">
                Przekierowanie do strony głównej za {countdown}{" "}
                {countdown === 1 ? "sekundę" : "sekundy"}...
              </div>
            </div>{" "}
          </div>
        </div>
      )}
      <motion.div
        className="contact_container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <div className="container">
          <div className="contact_description_deal">
            Masz pytania? Zadzwoń, napisz i umów się na darmową wycenę!{" "}
          </div>
          <div className="contact_description">
            <div className="contact_contact">
              <Image
                src={MailIcon}
                alt="Ikona wiadmości mail"
                className="icon"
              />{" "}
              e-mail:{" "}
              <a href="mailto:biurowwprint@gmail.com">biurowwprint@gmail.com</a>{" "}
            </div>
            <br />
            <div className="contact_contact">
              <Image src={PhoneIcon} alt="Ikona telefonu" className="icon" />
              Telefon: <a href="tel:517258986">+48 517 258 986</a>
            </div>
            <br />
          </div>
        </div>{" "}
        <div className="contact_email_position">
          <div className="contact_email_container">
            <div className="contact_Htext">
              Napisz do <a className="contact_Htext_contrast"> nas!</a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <label>*Imię</label>
              <br />
              <input
                type="text"
                name="user_name"
                className="dark:text-black"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
              <br />
              <label>Telefon </label>
              <input
                type="text"
                name="user_phone"
                className="dark:text-black"
              />
              <br />
              <label>*Email</label>
              <br />
              <input
                type="email"
                name="user_email"
                className="dark:text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>*Wiadomość</label>
              <br />
              <textarea
                name="message"
                style={{ resize: "vertical", height: "150px" }}
                className="dark:text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />{" "}
              <div className="requiment">* - Pola wymagane</div>
              <motion.button
                type="submit"
                value="Send"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={!isValid}
                className={`contact_button ${
                  isValid ? "active_button" : "notactive_button"
                }`}
              >
                <a>Wyślij!</a>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
