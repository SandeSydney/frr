import React from "react";
import Carousel from "react-bootstrap/Carousel";
import diving from "../resources/eventsImageGallery/diving.webp";
import swimmingKids from "../resources/eventsImageGallery/kidsSwimming.webp";
import chomaFilm from "../resources/mainGallery/choma_film.webp";
import chomaHang from "../resources/mainGallery/choma_hang.webp";

function EventsCarousel() {
  return (
    <Carousel className="events_carousel">
      <Carousel.Item>
        <img src={swimmingKids} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={diving} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={chomaFilm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={chomaHang} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default EventsCarousel;
