import { Container } from "react-bootstrap";
import Amenities from "./amenities";
import FarmToFork from "./farmToFork";
import Features from "./features";
import HomeCarousel from "./homeCarousel";
import Landing from "./landing_page";
import MapLocation from "./maps";
import PaymentMethods from "./payment";
import Socials from "./socials";
import Welcome_Section from "./welcome";
import GoldVIP from "./goldvip";

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
      <GoldVIP />
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
