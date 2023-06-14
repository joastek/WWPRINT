"use client";
import "../../styles/pages/Contact/Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_los0ify",
        "template_j8mzea2",
        form.current,
        "aWToZai0hlr-ICeFx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact_container">
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
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Telefon</label>
              <input type="text" name="user_phone" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
