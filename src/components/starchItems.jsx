import React from "react";
import bhajia from "../resources/foodImageGallery/bhajia.webp";
import breads from "../resources/foodImageGallery/breads.webp";
import buns from "../resources/foodImageGallery/buns.webp";
import eidPlatter from "../resources/foodImageGallery/eid platter.webp";
import masalaChips from "../resources/foodImageGallery/masalaChips.webp";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function StarchItems() {
  const [starchRef, inViewStarch] = useInView({ initialInView: false });

  let starches = [
    { id: 1, imgSrc: bhajia },
    { id: 2, imgSrc: breads },
    { id: 3, imgSrc: buns },
    { id: 4, imgSrc: eidPlatter },
    { id: 5, imgSrc: masalaChips },
  ];
  return (
    <div
      ref={starchRef}
      className={inViewStarch ? "elementShow" : "elementHide"}
    >
      <Row>
        {starches.map((item, index) => {
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

export default StarchItems;
