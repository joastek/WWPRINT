import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewItems from "@/data/REVIEWS";
import "@/styles/components/Reviews.scss";
export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 50500,
    slidesToShow: 5, // Ilość widocznych opinii jednocześnie (zmień na wartość, która Ci odpowiada)
    slidesToScroll: 1,
    autoplay: true, // Dodajemy opcję autoplay
    autoplaySpeed: 10, // Czas trwania slajdu w ms (tutaj 3 sekundy)
    cssEase: "linear", // Ustawienie animacji na liniową
    responsive: [
      {
        breakpoint: 768, // Dla rozmiaru ekranu <= 768px (telefon)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1332, // Dla rozmiaru ekranu <= 1024px (tablet)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h2> Nasi klienci oceniają nasze usługi na 5/5!</h2>
      </div>
      <div className="reviews_slider">
        <div className="review_container">
          <Slider {...settings}>
            {ReviewItems.map(({ author, review }) => (
              <div className="review_item" key={author}>
                <FaQuoteLeft className="review_quote" />
                <div className=" review_stars">
                  {" "}
                  <FaStar className="review_star" />
                  <FaStar className="review_star" />
                  <FaStar className="review_star" />
                  <FaStar className="review_star" />
                  <FaStar className="review_star" />
                </div>
                <div className="review ">{review}</div>
                <div className="review_author ">{author}</div>
              </div>
            ))}{" "}
          </Slider>
        </div>
      </div>
    </>
  );
}
