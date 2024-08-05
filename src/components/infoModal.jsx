import Modal from "react-bootstrap/Modal";
import ContactCard from "./contactCard";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="informationModal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="informationModal">Accommodation Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Book With Us Today!</h4>
        <p>
          Feature currently under development. Kindly reach out to us via the
          channels below:
        </p>
        <ContactCard />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
