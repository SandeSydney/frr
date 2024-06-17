import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import frr_platter from "../resources/frr_platter.jpg";
import events_desc from "../resources/events_desc.jpg";
import accommodation_desc from "../resources/accommodation_desc.jpg";
import entertainment_desc from "../resources/entertainment_desc.jpg";
import agritourism_desc from "../resources/agritourism_desc.jpg";
import school_desc from "../resources/school_desc.jpg";
import FollowUS from "./follow_us";

export default function AboutPage() {
  return (
    <>
      <div className="about">
        <Container>
          <h2>The Perfect Gataway!</h2>
          <Row>
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
                amenities such as a Restaurant, Cocktail & Juice Bar, Cottages,
                Swimming Pool, Conferencing Halls, and organic Livestock & Plant
                varieties, all graced by the Texas-inspired Cowboy Theme.{" "}
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
                grilled Nyama choma made with the chef's secret recipe.
              </p>
              <p>
                We have a vibrant team on-premises that ensure you really feel
                at home, as their interaction is seamless, full of life, and
                with bright smiles. Customer satisfaction is our priority!
              </p>
            </Col>
          </Row>
          <div className="flex gap-3">
            <h5>Languages Spoken at the Ranch:</h5>
            <div className="flex gap-2">
              <p>English</p>
              <p>Swahili</p>
              <p>French</p>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <h4>RESTAURANT</h4>
              <p>
                Enjoy your dining experience either at the Garden Restarurant or
                Pool Restaurant where we serve local African Cuisine in an
                exciting and breathtaking atmosphere.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={frr_platter} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <img src={events_desc} alt="" />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <h4>EVENTS</h4>
              <p>
                Book your event through our reservation office to cater for your
                corporate functions, tours, weddings, celebrations, meetings,
                team-buildings, and school trips.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <h4>ACCOMMODATION</h4>
              <p>
                Enjoy the comfort of our Apartments, Cottages, or Camping Tents
                for accommodation, Each with a luxury of its own to suit your
                needs.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={accommodation_desc} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <img src={entertainment_desc} alt="" />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <h4>ENTERTAINMENT</h4>
              <p>
                Engage in Rhumba Music and a rustic ranch and cowboy feel to
                entertain you and keep you delighted as you explore the various
                activities offered.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <h4>AGRITOURISM</h4>
              <p>
                Enjoy our Farm-to-Fork experience by touring the Fred's Ranch
                Farm and exploring our animal products and fresh farm
                vegetables.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img src={agritourism_desc} alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <img src={school_desc} alt="" />
            </Col>
            <Col xs={12} sm={12} md={4}>
              <h4>SCHOOL</h4>
              <p>
                We are passionate about the hospitality industry and
                revolutionizing the hospitality experience in Kenya and Africa
                through <b>character, innovation, and excellence</b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FollowUS />
    </>
  );
}
