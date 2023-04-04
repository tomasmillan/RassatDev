import Slider from "react-slick";
import { slides } from "../utils/carousel";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "../styles/clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    nextArrow: <BsFillArrowRightCircleFill />,
    prevArrow: <BsFillArrowLeftCircleFill />,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="slider-container" key={slide.id}>
            <img src={slide.img} alt={slide.id} className="cImage" />
            <div className="slide-text">
              <h2>{slide.description}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
