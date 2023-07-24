import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReviewItems from "@/data/REVIEWS";
import "@/styles/components/Reviews.scss";
export default function Reviews() {
  return (
    <>
      <div className="header">
        <h2> Nasi klienci oceniają nasze usługi na 5/5! </h2>
        <FaStar className="header_star " />{" "}
      </div>
      <div className="reviews_slider">
        <div className="review_container">
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
        </div>
      </div>
    </>
  );
}
