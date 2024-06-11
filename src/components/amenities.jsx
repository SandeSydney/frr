import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Amenities = () => {
  return (
    <section className="amenities">
      <Container>
        <div className="offers">
          <Row className="flex-1">
            <Col sm={12} md={6}>
              <p className="font-bold text-4xl">
                Exquisite Amenities
              </p>
              <p className="font-bold text-5xl text-[#ffcf62]">We Offer</p>
            </Col>
          </Row>
          <div className="offers_list">
            <Row>
              <Col xs={6} sm={6} md={3}>
                BANQUET HALL
              </Col>
              <Col xs={6} sm={6} md={3}>
                WEDDING GROUNDS
              </Col>
              <Col xs={6} sm={6} md={3}>
                SWIMMING POOL
              </Col>
              <Col xs={6} sm={6} md={3}>
                HORSE RIDES
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={3}>
                RESTAURANT
              </Col>
              <Col xs={6} sm={6} md={3}>
                ACCOMMODATION
              </Col>
              <Col xs={6} sm={6} md={3}>
                FARM TOUR
              </Col>
              <Col xs={6} sm={6} md={3}>
                CAMPING
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={3}>
                KIDS PLAYGROUND
              </Col>
              <Col xs={6} sm={6} md={3}>
                TEAM BUILDING
              </Col>
              <Col xs={6} sm={6} md={3}>
                VIP LOUNGE
              </Col>
              <Col xs={6} sm={6} md={3}>
                ORGANIC PRODUCE
              </Col>
            </Row>
          </div>
        </div>
        <div className="explore">
          <p className="font-bold text-4xl text-center">
            Peek At Our
            <span className="text-[#ffcf62]"> Gallery</span>
          </p>
          <p>
            Spending time at our ranch is both relaxing and breathtaking. You
            get to enjoy a serene and tranquil environment, <br />
            leaving happier than you came.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Amenities;
