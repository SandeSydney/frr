import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Team() {
  return (
    <section className="about">
        <h1 className="text-center">OUR TEAM</h1>
        <div>
          <Container>
            <Row>
              <Col sm={12} md={6} lg={3}>
                <div>
                  <img src="" alt="Victor Machoka (MD)" />
                  <div>
                    <h3>VICTOR MACHOKA</h3>
                    <h4>Managing Director</h4>
                  </div>
                  <p>
                    Victor Keari Machoka is a hotelier by profession with over
                    15 years of experience. He has a Bachelors degree in Hotel
                    and Tourism Management, a Masters degree in International
                    relations, and is currently pursuing his PhD. Victor is a
                    motivational speaker, and is nicknamed Sheriff as he manages
                    the leadership team of the ranch.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div>
                  <img src="" alt="Linda Machoka (Director)" />
                  <div>
                    <h3>LINDA MACHOKA</h3>
                    <h4>Sales & Marketing Director</h4>
                  </div>
                  <p>
                    Linda Nabifwo Machoka is a hotelier by profession, boosting
                    an experience of over 15 years. She is skilled in
                    Procurement and Facilities Management. She is heavily
                    invested in overseeing Sales & Marketing, and supporting the
                    general operations of the ranch.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div>
                  <img src="" alt="Victor Machoka (MD)" />
                  <div>
                    <h3>LINDA MACHOKA</h3>
                    <h4>Sales & Marketing Director</h4>
                  </div>
                  <p>
                    Linda Nabifwo Machoka is a hotelier by profession, boosting
                    an experience of over 15 years. She is skilled in
                    Procurement and Facilities Management. She is heavily
                    invested in overseeing Sales & Marketing, and supporting the
                    general operations of the ranch.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={3}>
                <div>
                  <img src="" alt="Victor Machoka (MD)" />
                  <div>
                    <h3>LINDA MACHOKA</h3>
                    <h4>Sales & Marketing Director</h4>
                  </div>
                  <p>
                    Linda Nabifwo Machoka is a hotelier by profession, boosting
                    an experience of over 15 years. She is skilled in
                    Procurement and Facilities Management. She is heavily
                    invested in overseeing Sales & Marketing, and supporting the
                    general operations of the ranch.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </section>
  );
}
