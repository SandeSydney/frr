import { useState } from "react";
import React from "react";
import { Carousel, Modal } from "react-bootstrap";
import valentinesPoster from "../resources/posters/Valentines25.jpeg";
import westPoster from "../resources/posters/WildWest.jpeg";
import diamondPoster from "../resources/posters/VIP-DIAMOND.jpeg";
import goldPoster from "../resources/posters/VIP-GOLD.jpeg";

function AdsModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        size="md"
        aria-labelledby="adsModal"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="adsModal">Our Valentine Offer!!!</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Carousel fade interval={500}>
            <Carousel.Item>
              <img src={valentinesPoster} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={westPoster} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={diamondPoster} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={goldPoster} alt="" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdsModal;
