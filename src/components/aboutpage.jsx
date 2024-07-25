import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MapLocation from "./maps";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [fadeRef, inView] = useInView();
  const [featuresRef, inViewFeatures] = useInView();
  const [featuresRow1, inViewFeaturesRow1] = useInView();
  const [featuresRow2, inViewFeaturesRow2] = useInView();

  return (
    <>
      <div className="about">
        <Container>
          <div className="about_spacer"></div>
          <h2 ref={fadeRef} className={inView ? "elementShow" : "elementHide"}>
            The Perfect Getaway!
          </h2>
          <Row
            ref={fadeRef}
            className={inView ? "elementShowSlower" : "elementHide"}
          >
            <Col xs={12} sm={12} md={6}>
              <p>
                Fred's Ranch & Resort is Located in Isinya, a town in the
                outskirts of Nairobi. With its serene and picturesque location,
                the resort is easily accessible by road, and only 45 minute
                drive from the country's capital. Fred's Ranch & Resort makes
                the ideal escape from the hustle and bustle of the city, without
                having to travel far away.
              </p>
              <p>
                The Ranch stands on a 10 acre farm, hosting various opulent
                amenities such as Restaurants, Dispense, Cocktail & Juice Bars,
                Cottages, Swimming Pool, Conferencing Halls, and organic
                Livestock & Plant varieties, all graced by the Texas-inspired
                Cowboy Theme.{" "}
              </p>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <p>
                The Ranch is named after a celebrated Rhumba Radio presenter,
                Uncle Fred Obachi Machoka, whose love for Rhumba music is more
                than immesurable.
              </p>
              <p>
                Soothing Rhumba music is the order of the day as you sip on the
                finest of custom beverages, take a dip in our captivating pool
                on a sunny day of Kajiado, or even when feasting on our hot
                grilled Mbuzi choma made with the chef's secret recipe.
              </p>
              <p>
                We have a vibrant team on-premises that ensure you really feel
                at home, as their interaction is seamless, full of life, and
                with bright smiles. Customer satisfaction is our priority!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="features">
        <Container>
          <h4
            ref={featuresRef}
            className={inViewFeatures ? "elementShow" : "elementHide"}
          >
            Explore What We Have
          </h4>
          <Row
            ref={featuresRow1}
            className={inViewFeaturesRow1 ? "elementShowSlower" : "elementHide"}
          >
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="restaurant">
                <h5>Restaurant</h5>
                <p>
                  Enjoy your dining experience either at the Garden Restarurant
                  or Pool Restaurant where we serve local African Cuisine in an
                  exciting and breathtaking atmosphere.
                </p>
                <Link to={"/dining"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="events">
                <h5>Events</h5>
                <p>
                  Book your event through our reservation office to cater for
                  your corporate functions, tours, weddings, celebrations,
                  meetings, team-buildings, and school trips.
                </p>
                <Link to={"/events"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="accommodation">
                <h5>Accommodation</h5>
                <p>
                  Enjoy the comfort of our Apartments, Cottages, or Camping
                  Tents for accommodation, Each with a luxury of its own to suit
                  your needs.
                </p>
                <Link to={"/accommodation"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
          </Row>
          <Row
            ref={featuresRow2}
            className={inViewFeaturesRow2 ? "elementShowSlower" : "elementHide"}
          >
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="entertainment">
                <h5>Entertainment</h5>
                <p>
                  Engage in Rhumba Music and a rustic ranch and cowboy feel to
                  entertain you and keep you delighted as you explore the
                  various activities offered.
                </p>
                <Link to={"/events"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="agritourism">
                <h5>Agritourism</h5>
                <p>
                  Enjoy our Farm-to-Fork experience by touring the Fred's Ranch
                  Farm and exploring our animal products and fresh farm
                  vegetables.
                </p>
                <Link to={"/events"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4}>
              <div className="about_items" id="school">
                <h5>School</h5>
                <p>
                  We are passionate about the hospitality industry and
                  revolutionizing the hospitality experience in Kenya and Africa
                  through <b>character, innovation, and excellence</b>
                </p>
                <Link to={"/events"} className="explore_link">
                  Explore
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MapLocation />
    </>
  );
}
