import React from "react";
import barbeque from "../resources/foodImageGallery/barbeque.webp";
import chomaDark from "../resources/foodImageGallery/chomaDark.webp";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.webp";
import chomaHang from "../resources/foodImageGallery/chomaHang.webp";
import chomaPan from "../resources/foodImageGallery/chomaPan.webp";
import fishDry from "../resources/foodImageGallery/fishDry.webp";
import fishTomato from "../resources/foodImageGallery/fishTomato.webp";
import fishWet from "../resources/foodImageGallery/fishWet.webp";
import kienyeji from "../resources/foodImageGallery/kienyeji.webp";
import mutura from "../resources/foodImageGallery/mutura.webp";
import nyamaGrill from "../resources/foodImageGallery/nyamaGrill.webp";
import nyamaOnions from "../resources/foodImageGallery/nyamaOnions.webp";
import pork from "../resources/foodImageGallery/pork.webp";

import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function MeatyTreats() {
  const [meatyRef, inViewMeat] = useInView({ initialInView: false });

  const meatyTreats = [
    { id: 1, imgSrc: chomaDark },
    { id: 2, imgSrc: chomaFilm },
    { id: 3, imgSrc: chomaHang },
    { id: 4, imgSrc: chomaPan },
    { id: 5, imgSrc: nyamaGrill },
    { id: 6, imgSrc: nyamaOnions },
    { id: 7, imgSrc: pork },
    { id: 8, imgSrc: fishDry },
    { id: 10, imgSrc: fishTomato },
    { id: 11, imgSrc: kienyeji },
    { id: 12, imgSrc: mutura },
    { id: 13, imgSrc: barbeque },
    // steak, beef stragonoff, better pork image, better grilled kuku
  ];
  return (
    <div ref={meatyRef} className={inViewMeat ? "elementShow" : "elementHide"}>
      <Row>
        {meatyTreats.map((item, index) => {
          return (
            <Col xs={6} sm={6} md={2} key={index}>
              <img className="m-2" src={item.imgSrc} alt="" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MeatyTreats;
