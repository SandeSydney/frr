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
        <img
          className="d-block w-100"
          src={cabbana}
          alt="Cabbana Image"
          title="Fred's Ranch and Resort"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={farm}
          alt="Farm image"
          title="Fred's Ranch and Resort Farm tour"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={swimmingNight}
          alt="Swimming Pool Night"
          title="Fred's Ranch Swimming Pool at Night"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={cowsBack}
          alt="Fred's Ranch Cows from the back"
          title="Fred's Ranch and Resort Dairy cows"
          loading="eager"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
