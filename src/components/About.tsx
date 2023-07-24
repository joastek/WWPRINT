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
          WWPrint to dynamiczna drukarnia założona przez braci bliźniaków,
          Piotra i Tomasza. Firma specjalizuje się w kompleksowej obsłudze
          drukarskiej dla firm, agencji reklamowych oraz klientów
          indywidualnych. Oferuje szeroki wybór produktów i usług, takich jak
          ulotki, plakaty, wizytówki, etykiety, naklejki samoprzylepne,
          oklejanie witryn i pojazdów, oraz wiele innych. Piotr przynosi do
          firmy swoje doświadczenie w branży reklamowej, co pozwala na
          świadczenie profesjonalnego doradztwa w zakresie projektowania
          graficznego i strategii reklamowej. Tomasz natomiast jest ekspertem w
          dziedzinie druku i produkcji, posiadając głęboką wiedzę techniczną
          oraz śledząc najnowsze trendy i technologie. WWPrint kładzie nacisk na
          profesjonalizm, jakość i terminowość zleceń, współpracując jedynie z
          zaufanymi dostawcami materiałów. Bracia bliźniacy zapewniają
          indywidualne podejście do klientów i pełne zaangażowanie w realizację
          zleceń. Firma WWPrint stale doskonali swoje umiejętności, śledząc
          najnowsze trendy i uczestnicząc w szkoleniach oraz konferencjach.
          Dzięki temu są w stanie oferować innowacyjne rozwiązania, które
          spełniają oczekiwania nawet najbardziej wymagających klientów. WWPrint
          to nie tylko drukarnia, ale również partner biznesowy, który wspiera
          klientów w promocji marki i osiąganiu sukcesu.
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
