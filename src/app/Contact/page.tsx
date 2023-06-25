"use client";
import "../../styles/pages/Contact/Contact.scss";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
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
          alert("wiadomość wysłana !");
          clearFields();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
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
        <div className="contact_description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className="contact_description_deal">
          Zadzwoń i umów się na{" "}
          <a className="contact_description_deal_contrast">darmową</a> wycenę!
        </div>
        <div className="contact_email_position">
          <div className="contact_email_container">
            <div className="contact_Htext">
              Napisz do <a className="contact_Htext_contrast"> nas!</a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <label>Imię</label>
              <br />
              <input type="text" name="user_name" />
              <br />
              <label>Telefon (opcjonalne)</label>
              <input type="text" name="user_phone" />
              <br />
              <label>Email</label>
              <br />
              <input type="email" name="user_email" />
              <br />
              <label>Wiadomość</label>
              <br />
              <textarea name="message" style={{ resize: "vertical" }} /> <br />
              <button type="submit" value="Send">
                <div className="contact_button">Wyślij!</div>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
