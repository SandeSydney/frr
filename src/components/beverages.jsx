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
  ];
  return (
    <div
      ref={beverageRef}
      className={inViewBeverage ? "elementShow" : "elementHide"}
    >
      <Row>
        {beverages.map((item, index) => {
          return (
            <Col xs={12} sm={12} md={3} key={index}>
              <img className="m-2" src={item.imgSrc} alt="" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Beverages;
