import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { ImQuotesRight } from "react-icons/im";
import Slider from "react-slick";
import testimonialImg1 from "../assets/Testmonial.webp";
import testimonialImg2 from "../assets/Testmonial.webp";
import testimonialImg3 from "../assets/Testmonial.webp";
import "../styles/Testimonial.css";

export class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    };

    return (
      <div className="testimonial">
        <Container fluid className="container-fluidses">
          <Slider {...settings}>
            {[testimonialImg1, testimonialImg2, testimonialImg3].map(
              (img, idx) => (
                <div className="cardss" key={idx}>
                  <img
                    className="imgases"
                    src={img}
                    alt={`testimonialImg${idx + 1}`}
                    style={{ width: "110px" }}
                  />
                  <ImQuotesRight className="quata" />
                  <p className="dummy mt-3 ">
                    {idx === 0 &&
                      "Yichang's natural beauty left me speechless. The stunning landscapes and rich cultural heritage were truly unforgettable."}
                    {idx === 1 &&
                      "The luxury accommodations in Yichang were beyond my expectations. From the comfortable rooms to the world-class amenities, every detail was perfect."}
                    {idx === 2 &&
                      "Yichang's expert guides helped me discover hidden gems and learn about the city's rich history and culture. I couldn't have asked for a better travel experience."}
                  </p>
                  <p className="dummy mt-2 text-muted">
                    {idx === 0
                      ? "- Sarah Lee"
                      : idx === 1
                      ? "- John Smith"
                      : "- Rachel Chen"}
                  </p>
                </div>
              )
            )}
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Testimonial;
