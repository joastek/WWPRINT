import "../../styles/pages/Contact/Contact.scss";

const Contact = () => {
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
            <a>Imię</a>
            <br />
            <input type="text" id="name" />
            <br />
            <a>Email</a>
            <br />
            <input type="email" id="email" />
            <br />
            <a>Wiadomość</a>
            <br />
            <textarea
              className="contact_textarea"
             
              id="message"
            />
            <br />
            <button>
              <a className="contact_button">Wyślij!</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
