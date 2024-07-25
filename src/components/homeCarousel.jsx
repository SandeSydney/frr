import React from "react";
import { Carousel } from "react-bootstrap";
import cabbana from "../resources/mainGallery/cabbanaImage.webp";
import horseBack from "../resources/mainGallery/horse_back.webp";
import swimmingNight from "../resources/mainGallery/swimming_night.webp"

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={cabbana} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={horseBack} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={swimmingNight} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
