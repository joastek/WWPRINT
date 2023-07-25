import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
const About = () => {
  const apiKey = "AIzaSyAidhmOphAxgdU2jHbcfeiYSN1gJyFmTy8";
  const placeId = "ChIJhesbVwWWHygR_4EbBaYCAMQ";
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);
  return (
    <>
      {" "}
      <motion.div
        className="mainpage_about_container "
        id="About"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.6, 0.92, 0.6, 1.01],
        }}
      >
        <h1>O nas</h1>
        {reviews.map((review) => (
          <div key={review}>
            <h3>{review}</h3>
            <p>Rating: {review}</p>
            <p>{review}</p>
            <hr />
          </div>
        ))}
        <div className="mainpage_about_description">
          Firma reklamowa WWPrint to efekt połączenia sił kreatywnych i pełnych
          zapału braci bliźniaków. Dzięki długoletniemu doświadczeniu w branży
          reklamowej Piotra, który wniósł do firmy swoja cenną wiedzę i
          twórczość w kreowaniu projektów reklamowanych, oraz umiejętnościom
          zarządzania zespołem i dobrej organizacji pracy Tomasza, stworzono
          dynamiczny i profesjonalny zespół, gotowy sprostać każdemu wyzwaniu.
        </div>

        <div className="mainpage_about_Aboutfontcontainer">
          100% gwarantowanej <a>satysfakcji</a>
        </div>
        <Link href="/Contact" style={{ textDecoration: "none" }}>
          <button className="mainpage_button">
            Zaplanuj spotkanie już dziś!
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default About;
