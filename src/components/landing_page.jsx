import { TypeAnimation } from "react-type-animation";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <>
      <TypeAnimation
        className="landing_text"
        sequence={["-FRED'S RANCH & RESORT-"]}
        speed={50}
        cursor={false}
      />
      <TypeAnimation
        className="landing_subtext"
        sequence={[3000, "Feels Just Like Grandma's..."]}
        speed={60}
        cursor={false}
        preRenderFirstString={true}
      />
      <div className="flex h-7 text-white">
        <p className=" text-xs md:text-sm underline underline-offset-8 cursor-pointer">
          <Link
            to="welcome"
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
          >
            Scroll Down
          </Link>
        </p>
        <SouthSharpIcon />
      </div>
    </>
  );
};

export default Landing;
