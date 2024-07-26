import React from "react";
import { Col, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import barbeque from "../resources/foodImageGallery/barbeque.webp";
import bhajia from "../resources/foodImageGallery/bhajia.webp";
import breads from "../resources/foodImageGallery/breads.webp";
import buns from "../resources/foodImageGallery/buns.webp";
import chomaDark from "../resources/foodImageGallery/chomaDark.webp";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.webp";
import chomaHang from "../resources/foodImageGallery/chomaHang.webp";
import chomaPan from "../resources/foodImageGallery/chomaPan.webp";
import cocktailBlue from "../resources/foodImageGallery/cocktailBlue.webp";
import cocktails from "../resources/foodImageGallery/cocktails.webp";
import eidPlatter from "../resources/foodImageGallery/eid platter.webp";
import fishDry from "../resources/foodImageGallery/fishDry.webp";
import fishTomato from "../resources/foodImageGallery/fishTomato.webp";
import fishWet from "../resources/foodImageGallery/fishWet.webp";
import grapeCocktail from "../resources/foodImageGallery/grapeCocktail.webp";
import guavaJuice from "../resources/foodImageGallery/guavaJuice.webp";
import kienyeji from "../resources/foodImageGallery/kienyeji.webp";
import kunde from "../resources/foodImageGallery/kunde.webp";
import masalaChips from "../resources/foodImageGallery/masalaChips.webp";
import mintCocktail from "../resources/foodImageGallery/mintCocktail.webp";
import mocktail from "../resources/foodImageGallery/mocktail.webp";
import mutura from "../resources/foodImageGallery/mutura.webp";
import nyamaGrill from "../resources/foodImageGallery/nyamaGrill.webp";
import nyamaOnions from "../resources/foodImageGallery/nyamaOnions.webp";
import pork from "../resources/foodImageGallery/pork.webp";
import redblueCocktail from "../resources/foodImageGallery/redblueCocktail.webp";
import redCocktail from "../resources/foodImageGallery/redCocktail.webp";
import salad from "../resources/foodImageGallery/salad.webp";
import salad2 from "../resources/foodImageGallery/salad2.webp";

export default function FoodGallery() {
  let foodData = [
    { id: 1, imgSrc: barbeque },
    { id: 2, imgSrc: breads },
    { id: 3, imgSrc: bhajia },
    { id: 4, imgSrc: buns },
    { id: 5, imgSrc: chomaDark },
    { id: 6, imgSrc: chomaFilm },
    { id: 7, imgSrc: chomaHang },
    { id: 10, imgSrc: chomaPan },
    { id: 11, imgSrc: kunde },
    { id: 12, imgSrc: cocktails },
    { id: 13, imgSrc: salad },
    { id: 14, imgSrc: fishDry },
    { id: 15, imgSrc: fishTomato },
    { id: 16, imgSrc: fishWet },
    { id: 17, imgSrc: grapeCocktail },
    { id: 18, imgSrc: salad2 },
    { id: 19, imgSrc: kienyeji },
    { id: 20, imgSrc: nyamaGrill },
    { id: 21, imgSrc: masalaChips },
    { id: 22, imgSrc: mintCocktail },
    { id: 23, imgSrc: pork },
    { id: 24, imgSrc: mutura },
    { id: 25, imgSrc: eidPlatter },
    { id: 26, imgSrc: nyamaOnions },
    { id: 27, imgSrc: mocktail },
    { id: 28, imgSrc: redblueCocktail },
    { id: 29, imgSrc: redCocktail },
    { id: 30, imgSrc: cocktailBlue },
    { id: 31, imgSrc: guavaJuice },
  ];

  return (
    <>
      <Element name="foodGallery">
        <Row>
          {foodData.map((item, index) => {
            return (
              <Col xs={12} sm={12} md={3} key={index}>
                <img className="m-2" src={item.imgSrc} alt="" />
              </Col>
            );
          })}
        </Row>
      </Element>
    </>
  );
}
