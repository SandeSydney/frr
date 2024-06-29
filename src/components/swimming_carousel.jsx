import React from "react";
import Carousel from "react-bootstrap/Carousel";
import diving from "../resources/eventsImageGallery/diving.jpg";
import swimmingKids from "../resources/eventsImageGallery/kidsSwimming.jpg";

function SwimmingCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={diving} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={swimmingKids} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SwimmingCarousel;
