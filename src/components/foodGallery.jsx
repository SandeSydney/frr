import React from "react";
import barbeque from "../resources/foodImageGallery/barbeque.jpg";
import breads from "../resources/foodImageGallery/breads.jpg";
import bhajia from "../resources/foodImageGallery/bhajia.jpg";
import buns from "../resources/foodImageGallery/buns.jpg";
import chomaDark from "../resources/foodImageGallery/chomaDark.jpg";
import chomaFilm from "../resources/foodImageGallery/chomaFilm.jpg";
import chomaHang from "../resources/foodImageGallery/chomaHang.jpg";
import chomaHold from "../resources/foodImageGallery/chomaHold.jpg";
import chomaMore from "../resources/foodImageGallery/chomaMore.jpg";
import chomaPan from "../resources/foodImageGallery/chomaPan.jpg";
import cocktailBlue from "../resources/foodImageGallery/cocktailBlue.jpg";
import cocktails from "../resources/foodImageGallery/cocktails.jpg";
import eidPlatter from "../resources/foodImageGallery/eid platter.jpg";
import fishDry from "../resources/foodImageGallery/fishDry.jpg";
import fishTomato from "../resources/foodImageGallery/fishTomato.jpg";
import fishWet from "../resources/foodImageGallery/fishWet.jpg";
import grapeCocktail from "../resources/foodImageGallery/grapeCocktail.jpg";
import guavaJuice from "../resources/foodImageGallery/guavaJuice.jpg";
import kienyeji from "../resources/foodImageGallery/kienyeji.jpg";
import kunde from "../resources/foodImageGallery/kunde.jpg";
import masalaChips from "../resources/foodImageGallery/masalaChips.jpg";
import mintCocktail from "../resources/foodImageGallery/mintCocktail.jpg";
import mocktail from "../resources/foodImageGallery/mocktail.jpg";
import mutura from "../resources/foodImageGallery/mutura.jpg";
import nyamaGrill from "../resources/foodImageGallery/nyamaGrill.jpg";
import nyamaOnions from "../resources/foodImageGallery/nyamaOnions.jpg";
import pork from "../resources/foodImageGallery/pork.jpg";
import redblueCocktail from "../resources/foodImageGallery/redblueCocktail.jpg";
import redCocktail from "../resources/foodImageGallery/redCocktail.jpg";
import salad from "../resources/foodImageGallery/salad.jpg";
import salad2 from "../resources/foodImageGallery/salad2.jpg";
import { Col, Row } from "react-bootstrap";

export default function FoodGallery() {
  let foodData = [
    { id: 1, imgSrc: barbeque },
    { id: 2, imgSrc: breads },
    { id: 3, imgSrc: bhajia },
    { id: 4, imgSrc: buns },
    { id: 5, imgSrc: chomaDark },
    { id: 6, imgSrc: chomaFilm },
    { id: 7, imgSrc: chomaHang },
    { id: 8, imgSrc: chomaHold },
    { id: 9, imgSrc: chomaMore },
    { id: 10, imgSrc: chomaPan },
    { id: 11, imgSrc: kunde },
    { id: 12, imgSrc: cocktails },
    // { id: 13, imgSrc: salad },
    // { id: 14, imgSrc: fishDry },
    // { id: 15, imgSrc: fishTomato },
    // { id: 16, imgSrc: fishWet },
    // { id: 17, imgSrc: grapeCocktail },
    // { id: 18, imgSrc: salad2 },
    // { id: 19, imgSrc: kienyeji },
    // { id: 20, imgSrc: nyamaGrill },
    // { id: 21, imgSrc: masalaChips },
    // { id: 22, imgSrc: mintCocktail },
    // { id: 23, imgSrc: pork },
    // { id: 24, imgSrc: mutura },
    // { id: 25, imgSrc: eidPlatter },
    // { id: 26, imgSrc: nyamaOnions },
    // { id: 27, imgSrc: mocktail },
    // { id: 28, imgSrc: redblueCocktail },
    // { id: 29, imgSrc: redCocktail },
    // { id: 30, imgSrc: cocktailBlue },
    // { id: 31, imgSrc: guavaJuice },
  ];

  return (
    <>
      <Row>
        {foodData.map((item, index) => {
          return (
            <Col xs={12} sm={12} md={3} key={index}>
              <img className="m-2" src={item.imgSrc} alt="" />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
