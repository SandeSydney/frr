import React from "react";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { Link } from "react-scroll";

function EntertainmentPage() {
  return (
    <>
      {" "}
      <div className="entertainment_page">
        <div className="about_spacer"></div>
        <div className="entertainment_landing">
          <div className="entertainment_landing_text">
            <h1>-A World of Endless Entertainment-</h1>
            <p>...Unleash your Imagination"</p>
            <button className="text-white mt-5 text-xs md:text-sm underline underline-offset-8">
              <Link
                to="choma_col"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
              >
                Scroll Down &nbsp;
                <SouthSharpIcon />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntertainmentPage;
