import Container from "react-bootstrap/Container";
import sunset_pool from "../resources/sunset_pool.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Features() {
  return (
    <div className="features">
      <Container className="features_container">
        <img src={sunset_pool} alt="feature image" />

        <div className="flex flex-col gap-4">
          <h2 className="text-center font-extrabold font-[Dancing-Script]">
            Glimpse Of The Nature In The Ranch
          </h2>
          <div className="features_glimpse">
            <Row>
              <Col sm={12} md={6}>
                <p className="font-[Dancing-Script] tracking-wider lg:text-xl">
                  Fred's Ranch & Resort is an integral part of Kajiado Getaways,
                  and located 70 kilometers from Nairobi City Center, we set the
                  standards for excellence in vacation experiences.The easy
                  Rhumba Music playing in the background as you enjoy your
                  favourite cocktail or having a dip in the exquisite swimming
                  pool is definitely the perfect escape from the hustle of the
                  city.
                </p>
                <img src="" alt="" />
              </Col>
              <Col sm={12} md={6}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
