import React from "react";
import Carousel from "react-bootstrap/Carousel";
import dance from "../resources/eventsImageGallery/dance.jpg";
import weddingPeople from "../resources/eventsImageGallery/weddingPeople.jpg";
import uncleKids from "../resources/eventsImageGallery/uncleKids.jpg";

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
