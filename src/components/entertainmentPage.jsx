import React from "react";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Carousel, Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import swimming from "../resources/eventsImageGallery/swimming.webp";
import calfFull from "../resources/farmGallery/calfFull.webp";
import guineaFowls from "../resources/farmGallery/guineaFowls.webp";
import broiler_cbc from "../resources/farmGallery/Freds-Ranch-Farm-Broiler-CBC.webp";
import managu_cbc from "../resources/farmGallery/Freds-Ranch-Farm-Tour-Managu-School.webp";
import farm_tour_cbc from "../resources/farmGallery/Freds-Ranch-Farm-Tour-School.webp";
import sagaa from "../resources/farmGallery/sagaa.webp";
import chomaMore from "../resources/foodImageGallery/chomaMore.webp";
import teamBuilding from "../resources/eventsImageGallery/dance.webp";
import teamBuilding1 from "../resources/eventsImageGallery/studentsDance.webp";
import uncleKids from "../resources/eventsImageGallery/uncleKids.webp";
import { Helmet } from "react-helmet";

function EntertainmentPage() {
  // variables for scroll animations using useInView
  const [entertainmentRef, inLandingView] = useInView({
    initialInView: false,
  });

  const [scrollRef, inScrollView] = useInView({
    initialInView: false,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Entertainment - Fred's Ranch and Resort</title>
        <link rel="canonical" href="https://fredsranch.co.ke/entertainment" />
      </Helmet>{" "}
      <div className="entertainment_page">
        <div className="about_spacer"></div>
        <div className="entertainment_landing">
          <div className="entertainment_landing_text">
            <h1
              ref={entertainmentRef}
              className={inLandingView ? "elementShow" : "elementHide"}
            >
              -A World of Endless Entertainment-
            </h1>
            <p
              ref={entertainmentRef}
              className={inLandingView ? "elementShowSlower" : "elementHide"}
            >
              ...Unleash your Imagination"
            </p>
            <button className="text-white mt-5 text-xs md:text-sm underline underline-offset-8">
              <div
                ref={scrollRef}
                className={inScrollView ? "elementShowSlower" : "elementHide"}
              >
                <Link
                  to="entertainment_description"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Scroll Down &nbsp;
                  <SouthSharpIcon />
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="events_description" id="entertainment_description">
        <Container>
          <div>
            <h2 className="text-center">Entertainment</h2>

            <div className="event_row">
              <div className="events_cols">
                <img src={swimming} alt="Swimming at Fred's Ranch and Resort" />
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
              </div>
              <div className="events_cols">
                <h3>Mbuzi Choma Weekends</h3>
                <p>
                  They say it is never a party without goat meat roasting on the
                  grill. Gather your family and friends and come let's party!
                </p>
                <p>
                  We have plenty of Kajiado's finest goat meat and your favorite
                  drinks to down it as you enjoy the upbeat and romantic Rhumba
                  music in the background.
                </p>
                <p>
                  "Naturally grazed, grass-fed, freshly butchered, and supremely
                  roasted"
                </p>
                <img
                  src={chomaMore}
                  alt="Mbuzi choma weekends at Fred's Ranch and Resort"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="event_row">
              <div className="events_cols">
                <Carousel>
                  <Carousel.Item interval={750}>
                    <img
                      src={uncleKids}
                      alt="Team Buildings at Fred's Ranch and Resort"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={750}>
                    <img
                      src={teamBuilding}
                      alt="School team Buildings at Fred's Ranch and Resort"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={750}>
                    <img
                      src={teamBuilding1}
                      alt="Corporate team Buildings at Fred's Ranch and Resort"
                    />
                  </Carousel.Item>
                </Carousel>

                <h3>Team-Building</h3>
                <p>
                  Fred's Ranch & Resort hosts the perfect venue for your
                  team-building program. Having the best venue and location, we
                  have plenty of activities to get your team engaged in
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
                <h3>Farm Tours</h3>
                <p>
                  Organic produce and farming techniques is the core of Fred's
                  Ranch and Resort farm. Come and experience diverse farming
                  techniques that put farm-fresh organic produce on our menu.
                </p>
                <p>
                  Fred's Ranch and Resort has a range of crops and livestock
                  that are brought up organically. Visit the ranch to get
                  exposure on how well you can farm to produce high yields,
                  regardless of being a small scale or large scale farmer.
                </p>
                <p>"Nurturing Nature, Harvesting Health!"</p>
                <Carousel>
                  <Carousel.Item interval={850}>
                    <img
                      src={calfFull}
                      alt="Fred's Ranch and Resort Farm Tours"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={850}>
                    <img
                      src={guineaFowls}
                      alt="Fred's Ranch and Resort Farm Tours"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={850}>
                    <img src={sagaa} alt="Fred's Ranch and Resort Farm Tours" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div>
            <div className="event_row">
              <div className="events_cols">
                <Carousel>
                  <Carousel.Item interval={750}>
                    <img
                      src={farm_tour_cbc}
                      alt="CBC Farm Tours at Fred's Ranch & Resort"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={750}>
                    <img
                      src={broiler_cbc}
                      alt="Broiler Farm at Fred's Ranch and Resort"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={750}>
                    <img
                      src={managu_cbc}
                      alt="School CBC Farm tours at Fred's Ranch and Resort"
                    />
                  </Carousel.Item>
                </Carousel>

                <h3>CBC Educational Tours</h3>
                <p>
                  Fred's Ranch & Resort is the perfect venue for schools to impact practical knowledge about farming practices and agriculture, which is amongst the main focus of the new CBC curriculum. 
                </p>
                <p>
                  At Fred's Ranch and Resort, the CBC students and teachers will be exposed to practical farming skills, innovation and creativity when it comes to farming, Environmental sustainability and stewardship, critical thinking and problem solving in agriculture, and skills in entrepreneurship and agribusiness. 
                </p>
              </div>
              <div className="events_cols">
                
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pageLink">
        <Container>
          <RouterLink to={"/accommodation"}>
            Check our Accommodation Features
          </RouterLink>
        </Container>
      </div>
    </>
  );
}

export default EntertainmentPage;
