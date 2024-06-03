import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import restaurant_desc from "../resources/restaurant_desc.jpg";
import events_desc from "../resources/events_desc.jpg";
import entertainment_desc from "../resources/entertainment_desc.jpg"
import agritourism_desc from "../resources/agritourism_desc.jpg";
import school_desc from "../resources/school_desc.jpg";
import accommodation_desc from "../resources/accommodation_desc.jpg"

export default function Features() {
  return (
    <Container className="flex flex-col gap-6">
      <h3 className="text-center underline underline-offset-8">WHAT WE OFFER</h3>
      <Row>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={restaurant_desc} alt="Restaurant Image" />
            <h5>Restaurant</h5>
            <p>
              Enjoy your dining experience either at the Garden Restaurant or
              Swimming pool restaurant where we serve local African Cuisine in
              an exciting and breathtaking atmosphere.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={events_desc} alt="Events Image" />
            <h5>Events</h5>
            <p>
              Book your event through our reservation office to cater for your
              corporate functions, tours, weddings, celebrations, meetings, team
              buildings, and school trips.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={accommodation_desc} alt="Accomodation Image" />
            <h5>Accommodation</h5>
            <p>
              Enjoy the comfort of our Apartments, Cottages, or Camping tents
              for accommodation, each with a luxury of its own to suit your
              needs.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={entertainment_desc} alt="Entertainment Image" />
            <h5>Entertainment</h5>
            <p>
              Engage in Rhumba Music, a rustic ranch, and a cowboy feel to
              entertain you and keep you delighted as you explore the various
              activities offered.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={agritourism_desc} alt="Agritourism Image" />
            <h5>Agritourism</h5>
            <p>
              Enjoy our Farm-to-Fork experience by touring the Fred's Ranch Farm and exploring the animal products and fresh farm vegetables.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="features">
            <img src={school_desc} alt="School Image" />
            <h5>School</h5>
            <p>
              We are passionate about the hospitality industry and revolutionizing the hospitality experience in Kenya and Africa through <span className="font-bold">character, innovation, and excellence</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
