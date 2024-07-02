import { Container } from "react-bootstrap";

const MapLocation = () => {
  return (
    <Container>
      <div className="py-7">
        <h4 style={{ fontFamily: "Alegreya SC" }}>Our Location</h4>
        <div className="maplocation">
            <iframe
              style={{
                height: "100%",
                width: "100%",
                border: 0,
                frameBorder: "0",
              }}
              src="https://www.google.com/maps/embed/v1/place?q=Fred's+Ranch&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          <a
            class="googlemaps-made"
            href="https://www.bootstrapskins.com/themes"
            id="grab-map-info"
          ></a>
        </div>
      </div>
    </Container>
  );
};

export default MapLocation;
