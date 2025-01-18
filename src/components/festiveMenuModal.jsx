import React from "react";
import { Modal } from "react-bootstrap";
import festiveMenu from "../resources/foodMenu/Grandmas Cookout Menu.jpeg";

function FestiveMenuModal(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="informationModal">
      <Modal.Header closeButton>
        <Modal.Title id="informationModal">
          GRANDMA'S CHRISTMAS MENU
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="festiveMenu">
          <iframe
            src={festiveMenu}
            frameborder="0"
            title="Fred's Ranch and Resort Grandma's Menu"
          ></iframe>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
    </Modal>
  );
}

export default FestiveMenuModal;
