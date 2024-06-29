import React from "react";
import Carousel from "react-bootstrap/Carousel";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.jpg";
import chomaHang from "../resources/foodImageGallery/chomaHang.jpg";

function ChomaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={chomaFilm} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={chomaHang} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ChomaCarousel;
