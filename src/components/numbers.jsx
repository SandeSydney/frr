import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import reservation from "../resources/reservation.png";
import client from "../resources/client.png";
import swim from "../resources/swim.png";
import choma from "../resources/choma.png";

export default function Numbers() {
  return (
    <section className="about">
      <div>
        <h2 className="text-center">OUR NUMBERS</h2>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <div>
                <img className="" src={client} alt="Client Image" />
                <p>6000+</p>
                <p>Client Count</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div>
                <img src={choma} alt="Nyama Choma Image" />
                <p>8500+</p>
                <p>Nyama Choma</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div>
                <img src={swim} alt="Swimming Image" />
                <p>3500+</p>
                <p>Swimming</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div>
                <img src={reservation} alt="Reservation Image" />
                <p>3800+</p>
                <p>Reservations</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
