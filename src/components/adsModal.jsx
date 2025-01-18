import { useState } from "react";
import React from "react";
import { Modal } from "react-bootstrap";
import valentinesPoster from "../resources/posters/Valentines25.jpeg";

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
            <img src={valentinesPoster} alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdsModal;
