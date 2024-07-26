import React from "react";
import chomaDark from "../resources/foodImageGallery/chomaDark.webp";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.webp";
import chomaHang from "../resources/foodImageGallery/chomaHang.webp";
import chomaPan from "../resources/foodImageGallery/chomaPan.webp";
import fishDry from "../resources/foodImageGallery/fishDry.webp";
import fishWet from "../resources/foodImageGallery/fishWet.webp";
import kienyeji from "../resources/foodImageGallery/kienyeji.webp";
import mutura from "../resources/foodImageGallery/mutura.webp";
import nyamaGrill from "../resources/foodImageGallery/nyamaGrill.webp";
import nyamaOnions from "../resources/foodImageGallery/nyamaOnions.webp";
import pork from "../resources/foodImageGallery/pork.webp";
import barbeque from "../resources/foodImageGallery/barbeque.webp";
import fishTomato from "../resources/foodImageGallery/fishTomato.webp";

import { Col, Row } from "react-bootstrap";
import { Element } from "react-scroll";

function MeatyTreats() {
  const meatyTreats = [
    { id: 1, imgSrc: chomaDark },
    { id: 2, imgSrc: chomaFilm },
    { id: 3, imgSrc: chomaHang },
    { id: 4, imgSrc: chomaPan },
    { id: 5, imgSrc: nyamaGrill },
    { id: 6, imgSrc: nyamaOnions },
    { id: 7, imgSrc: pork },
    { id: 8, imgSrc: fishDry },
    { id: 9, imgSrc: fishWet },
    { id: 10, imgSrc: fishTomato },
    { id: 11, imgSrc: kienyeji },
    { id: 12, imgSrc: mutura },
    { id: 13, imgSrc: barbeque },
  ];
  return (
    <Row>
      {meatyTreats.map((item, index) => {
        return (
          <Col xs={12} sm={12} md={3} key={index}>
            <img className="m-2" src={item.imgSrc} alt="" />
          </Col>
        );
      })}
    </Row>
  );
}

export default MeatyTreats;
