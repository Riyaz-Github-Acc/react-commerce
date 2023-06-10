import { useState, useEffect } from "react";

import "./Slider.scss";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src="images/banner-1.jpeg" alt="" />
        <img src="images/banner-2.jpeg" alt="" />
        <img src="images/banner-3.jpeg" alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
