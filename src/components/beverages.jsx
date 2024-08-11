import React from "react";
import redblueCocktail from "../resources/foodImageGallery/redblueCocktail.webp";
import redCocktail from "../resources/foodImageGallery/redCocktail.webp";
import mintCocktail from "../resources/foodImageGallery/mintCocktail.webp";
import grapeCocktail from "../resources/foodImageGallery/grapeCocktail.webp";
import guavaJuice from "../resources/foodImageGallery/guavaJuice.webp";
import mocktail from "../resources/foodImageGallery/mocktail.webp";
import doubleCocktails from "../resources/foodImageGallery/doubleCocktails.webp";
import doubleCocktails2 from "../resources/foodImageGallery/doubleCocktails2.webp";
import blueCocktail from "../resources/foodImageGallery/cocktailBlue.webp";
import blueKamikaze from "../resources/foodImageGallery/blueKamikaze.webp";
import mudslide from "../resources/foodImageGallery/mudslide.webp";
import nySour_blueKamikaze from "../resources/foodImageGallery/nySour_blueKamikaze.webp";
import saladCocktails from "../resources/foodImageGallery/saladCocktails.webp";
import smokingRed from "../resources/foodImageGallery/smokingRed.webp";
import clearCocktail from "../resources/foodImageGallery/clearCocktail.webp";
import cocktail1 from "../resources/foodImageGallery/cocktail1.webp";

import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function Beverages() {
  const [beverageRef, inViewBeverage] = useInView({ initialInView: false });

  const beverages = [
    { id: 1, imgSrc: guavaJuice },
    { id: 2, imgSrc: mocktail },
    { id: 3, imgSrc: redCocktail },
    { id: 4, imgSrc: doubleCocktails },
    { id: 5, imgSrc: doubleCocktails2 },
    { id: 6, imgSrc: redblueCocktail },
    { id: 7, imgSrc: mintCocktail },
    { id: 8, imgSrc: grapeCocktail },
    { id: 9, imgSrc: blueCocktail },
    { id: 10, imgSrc: blueKamikaze },
    { id: 11, imgSrc: mudslide },
    { id: 12, imgSrc: nySour_blueKamikaze },
    { id: 13, imgSrc: saladCocktails },
    { id: 14, imgSrc: smokingRed },
    { id: 15, imgSrc: clearCocktail },
    { id: 16, imgSrc: cocktail1 },
  ];
  return (
    <div
      ref={beverageRef}
      className={inViewBeverage ? "elementShow" : "elementHide"}
    >
      <Row>
        {beverages.map((item, index) => {
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

export default Beverages;
