import React from "react";
import { Carousel } from "react-bootstrap";
import cabbana from "../resources/mainGallery/cabbanaImage.webp";
import farm from "../resources/mainGallery/farmLarge.webp";
import swimmingNight from "../resources/mainGallery/swimmingNightLg.webp";
import cowsBack from "../resources/mainGallery/cowsBack.webp";

function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={800}>
        <img className="d-block w-100" src={cabbana} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img className="d-block w-100" src={farm} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img className="d-block w-100" src={swimmingNight} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img className="d-block w-100" src={cowsBack} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
