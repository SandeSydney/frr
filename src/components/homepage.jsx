import { Carousel, CarouselItem } from "react-bootstrap";
import Amenities from "./amenities";
import Features from "./features";
import Landing from "./landing_page";
import Welcome_Section from "./welcome";
import HomeCarousel from "./homeCarousel";

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
      <Features />
      <Amenities />
    </>
  );
}
