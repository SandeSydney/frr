import React from "react";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import bhajia from "../resources/foodImageGallery/bhajia.webp";
import breads from "../resources/foodImageGallery/breads.webp";
import buns from "../resources/foodImageGallery/buns.webp";
import eidPlatter from "../resources/foodImageGallery/eid platter.webp";
import masalaChips from "../resources/foodImageGallery/masalaChips.webp";
import chips from "../resources/foodImageGallery/chips.webp";
import chipsMasala from "../resources/foodImageGallery/chipsMasala.webp";
import friedPlantain from "../resources/foodImageGallery/friedPlantain.webp";
import samosa from "../resources/foodImageGallery/samosa.webp";
import sauteed from "../resources/foodImageGallery/sauteed.webp";

function StarchItems() {
  const [starchRef, inViewStarch] = useInView({ initialInView: false });

  let starches = [
    { id: 1, imgSrc: bhajia },
    { id: 2, imgSrc: breads },
    { id: 3, imgSrc: buns },
    { id: 4, imgSrc: eidPlatter },
    { id: 5, imgSrc: masalaChips },
    { id: 6, imgSrc: chips },
    { id: 7, imgSrc: chipsMasala },
    { id: 8, imgSrc: friedPlantain },
    { id: 9, imgSrc: samosa },
    { id: 10, imgSrc: sauteed },
  ];
  return (
    <div
      ref={starchRef}
      className={inViewStarch ? "elementShow" : "elementHide"}
    >
      <Row>
        {starches.map((item, index) => {
          return (
            <Col xs={6} sm={6} md={2} key={index}>
              <img className="m-2" src={item.imgSrc} alt="Fred' Ranch and Resort Meal" loading="lazy"/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default StarchItems;
