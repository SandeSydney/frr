import { Col, Container, Row } from "react-bootstrap";
import table_setting from "../resources/table_setting.jpg";
import { Link } from "react-router-dom";
import SouthIcon from "@mui/icons-material/South";
import kidsSwimming from "../resources/eventsImageGallery/kidsSwimming.jpg";
import SwimmingCarousel from "./swimming_carousel";
import ChomaCarousel from "./nyama_choma";

export default function EventsPage() {
  return (
    <>
      <div className="events_landing">
        <Container>
          <Row>
            <Col className="title_col" xs={12} sm={12} md={7}>
              <div className="flex flex-wrap gap-2">
                <h2>Life is an Event, make it Memorable</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={"20px"}
                >
                  <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                </svg>
              </div>
              <p>
                Get to experience the perfect spot for all your out-door
                activities and events at Fred's Ranch & Resort!
              </p>
              <Link className="explore_button">
                Explore More <SouthIcon />
              </Link>
            </Col>
            <Col xs={12} sm={12} md={5}>
              <img src={table_setting} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="events_description">
        <Container>
          <h2>Our Events</h2>
          <div>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={6}>
                <SwimmingCarousel />
              </Col>
              <Col xs={12} sm={12} md={4}>
                <h3>Swimming</h3>
                <p>
                  Experience a refreshing escape from the heat. The warm weather
                  in Kajiado makes it perfect for a dip in our tantalizing
                  swimming pool, to cool off and soak up the fun.
                </p>
                <p>
                  We offer a sparkling pool perfect for that splash with your
                  friends and family, and an inviting poolside view to get the
                  perfect unwinding as you indulge in food and drinks.
                </p>
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={4}>
                <h3>Nyama Choma Weekends</h3>
                <p>
                  They say it is never a party without goat meat roasting on the
                  grill. Gather your family and friends and come let's party!
                </p>
                <p>
                  We have plenty of meat and your favorite drinks to down it as
                  you enjoy the upbeat and romantic Rhumba music in the
                  background.
                </p>
                <p>
                  "Naturally grazed, grass-fed, freshly butchered, and supremely
                  roasted"
                </p>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <ChomaCarousel />
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
