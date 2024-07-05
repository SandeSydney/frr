import { Container } from "react-bootstrap";

var src =
  "https://www.google.com/maps/embed/v1/place?q=Fred's+Ranch&key=" +
  process.env.GOOGLE_MAP_API_KEY;

const MapLocation = () => {
  return (
    <Container>
      <div className="py-7">
        <h4 style={{ fontFamily: "Alegreya SC" }}>Our Location</h4>
        <div className="maplocation">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed/v1/place?q=Fred's+Ranch&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </Container>
  );
};

export default MapLocation;
