import React from "react";
import Carousel from "react-bootstrap/Carousel";
import weddingPeople from "../resources/eventsImageGallery/weddingPeople.jpg";
import diving from "../resources/eventsImageGallery/diving.jpg";
import swimmingKids from "../resources/eventsImageGallery/kidsSwimming.jpg";

function EventsCarousel() {
  return (
    <Carousel className="events_carousel">
      <Carousel.Item>
        <img src={weddingPeople} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={swimmingKids} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={diving} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default EventsCarousel;
