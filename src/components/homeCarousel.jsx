import React from "react";
import { Carousel } from "react-bootstrap";
import cabbana from "../resources/mainGallery/cabbanaImage.webp";
import farm from "../resources/mainGallery/farmLarge.webp";
import swimmingNight from "../resources/mainGallery/swimmingNightLg.webp";
import cowsBack from "../resources/mainGallery/cowsBack.webp";
import uncleCows from "../resources/mainGallery/uncleCows.webp";
import divingLg from "../resources/mainGallery/divingLg.webp";
import teamBuildingLg from "../resources/mainGallery/teamBuildingLg.webp";
import chomaRibsLg from "../resources/mainGallery/chomaRibsLg.webp";

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
          src={teamBuildingLg}
          alt="Fred's Ranch Cows from the back"
          title="Fred's Ranch and Resort Team Building"
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
          src={chomaRibsLg}
          alt="Farm image"
          title="Fred's Ranch and Resort Nyama Choma"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={divingLg}
          alt="Fred's Ranch Cows from the back"
          title="Fred's Ranch and Resort Diving"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={cowsBack}
          alt="Fred's Ranch Cows from the back"
          title="Fred's Ranch and Resort Dairy cows back"
          loading="eager"
        />
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={uncleCows}
          alt="Fred's Ranch Cows from the back"
          title="Fred's Ranch and Resort Machoka Dairy cows"
          loading="eager"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
