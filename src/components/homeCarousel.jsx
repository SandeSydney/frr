import React from "react";
import { Carousel } from "react-bootstrap";
import cabbana from "../resources/mainGallery/cabbanaImage.webp";
import horseBack from "../resources/mainGallery/horseBackLg.webp";
import swimmingNight from "../resources/mainGallery/swimmingNightLg.webp"

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={800}>
        <img src={cabbana} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img src={horseBack} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img src={swimmingNight} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
