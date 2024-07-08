import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dance from "../resources/eventsImageGallery/dance.webp";
import weddingPeople from "../resources/eventsImageGallery/weddingPeople.webp";
import uncleKids from "../resources/eventsImageGallery/uncleKids.webp";

function EventsCarousel2() {
  return (
    <Carousel className="events_carousel">
      <Carousel.Item>
        <img src={dance} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={weddingPeople} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={uncleKids} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default EventsCarousel2;
