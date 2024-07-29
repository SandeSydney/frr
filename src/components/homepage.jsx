import { Carousel, CarouselItem, Container } from "react-bootstrap";
import Amenities from "./amenities";
import Features from "./features";
import Landing from "./landing_page";
import Welcome_Section from "./welcome";
import HomeCarousel from "./homeCarousel";
import MapLocation from "./maps";
import Socials from "./socials";
import FarmToFork from "./farmToFork";
import PaymentMethods from "./payment";

export default function Homepage() {
  return (
    <>
      <div className="home">
        <HomeCarousel />
        <div className="landing">
          <Landing />
        </div>
      </div>
      <Welcome_Section />
      <FarmToFork />
      <Features />
      <Amenities />
      <div className="contact_main">
        <Container>
          <div className="map_socials">
            <MapLocation />
            <Socials />
          </div>
        </Container>
      </div>
      <PaymentMethods />
    </>
  );
}
