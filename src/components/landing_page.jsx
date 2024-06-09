import { TypeAnimation } from "react-type-animation";
import arrow_down from "../resources/arrow_down.png";

const Landing = () => {
  return (
    <>
      <TypeAnimation
        className="landing_text"
        sequence={["-FRED'S RANCH & RESORT-"]}
        speed={70}
        cursor={false}
      />
      <TypeAnimation
        className="landing_subtext"
        sequence={[3000, "Feels Just Like Grandma's..."]}
        speed={60}
        cursor={false}
        preRenderFirstString={true}
      />
      <div className="flex h-7">
        <p className="text-white text-xs md:text-sm underline underline-offset-8">
          Scroll Down <span></span>
        </p>
        <div>
          <img width="30px" src={arrow_down} alt="Arrow Down" />
        </div>
      </div>
    </>
  );
};

export default Landing;
