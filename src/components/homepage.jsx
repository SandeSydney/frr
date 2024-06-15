import Amenities from "./amenities";
import Features from "./features";
import Landing from "./landing_page";
import Welcome_Section from "./welcome";

export default function Homepage() {
  return (
    <>
      <div className="home">
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
