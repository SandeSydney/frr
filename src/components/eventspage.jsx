import SouthIcon from "@mui/icons-material/South";
import { Col, Container, Row } from "react-bootstrap";
import table_setting from "../resources/mainGallery/table_setting.webp";
import teamBuilding from "../resources/eventsImageGallery/team_building.webp";
import EventsCarousel from "./events_carousel";
import EventsCarousel2 from "./events_carousel2";
import { Link } from "react-scroll";

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
              <Link
                className="explore_button"
                to="events_description"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Explore More <SouthIcon />
              </Link>
            </Col>
            <Col xs={12} sm={12} md={5}>
              <img src={table_setting} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="events_description" id="events_description">
        <Container>
          <h2 className="text-center">Our Events</h2>
          <div>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={10}>
                <EventsCarousel />
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={5} className="events_cols">
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
              <Col xs={12} sm={12} md={5} className="events_cols">
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
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={5} className="events_cols">
                <h3>Weddings</h3>
                <p>
                  Fred's Ranch & Resort is the perfect spot to tie the knot.
                  Come gather with your friends and relatives to celebrate your
                  big day.
                </p>
                <p>
                  We offer the perfect wedding spot that is within your budget
                  and the comfort zone of every invited guest. Fred's Ranch &
                  Resort comes through your day with linens, to flatware,
                  banquet chairs, and more.
                </p>
              </Col>
              <Col xs={12} sm={12} md={5} className="events_cols">
                <h3>Photo-Shoots</h3>
                <p>
                  Standing on a 16 acre farm, Fred's Ranch i& Resort is the
                  perfect picturesque photography location in Kajiado.
                </p>
                <p>
                  With pastures stretching out beneath the wide blue skies,
                  charming gazebos nested among trees, Fred's Ranch & Resort
                  creates the perfect photographers dream.
                </p>
                <p>
                  "A good snapshot keeps the moment that's gone from running
                  away..."
                </p>
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={10}>
                <EventsCarousel2 />
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={5}>
                <div className="events_cols">
                  <h3>Team-Building</h3>
                  <p>
                    Fred's Ranch & Resort hosts the perfect venue for your
                    team-building program. Having the best venue and location,
                    we have plenty of activities to get your team engaged in
                    inspiring and bonding activities, practical games, test
                    abilities and teamwork skills.
                  </p>
                  <p>
                    Our approach is widely based on a friendly angle where we
                    engage the teams with experiental learning cycle. Look no
                    further if you are looking for team-building venues in
                    Kajiado.
                  </p>
                </div>
                <div className="events_cols">
                  <h3>Conferencing</h3>
                  <p>
                    We take conferencing very seriously. Fred's Ranch & Resort
                    has a conferencing venue that grants a spacious avenue for
                    delegates to happily mingle and enthusiastically chat.
                  </p>
                  <p>
                    Among other offerings the conferencing halls have great
                    acoustics and video displays as well, boosting compelling
                    speakers that bring crowded sessions and engage delegates.
                  </p>
                  <p>"Engaging Minds, Empowering Success"</p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} className="events_cols">
                <img src={teamBuilding} alt="" />
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
