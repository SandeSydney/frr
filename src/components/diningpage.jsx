import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import nyama_choma from "../resources/foodImageGallery/chomaHold.webp";
import nyama_choma2 from "../resources/mainGallery/nyama_choma2.webp";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import FoodGallery from "./foodGallery";
import { Link, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function DiningPage() {
  const location = useLocation();

  // useInView to animate items on view
  const [landingRef, inLandingView] = useInView({ triggerOnce: true });
  const [chomaColRef, inChomaView] = useInView({ triggerOnce: true });
  const [chomaRef, inChomaRefView] = useInView({ triggerOnce: true });

  // useEffect in order to get a smooth scroll on mount of the dining page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scroller.scrollTo(
        id,
        {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -20,
        },
        [location]
      );
    }
  });
  return (
    <>
      <div className="dining_container">
        <div className="dining_landing">
          <div className="dining_main">
            <div
              ref={landingRef}
              className={inLandingView ? "elementShow" : "elementHide"}
            >
              <h1 className="font-bold">- Dine With Us -</h1>
              <p className="text-white text-xl md:text-2xl font-semibold font-[Alegreya SC]">
                ... If you haven't had our mbuzi choma then you haven't tasted
                the Kajiado's Finest{" "}
                <span>
                  <FormatQuoteIcon className="text-[#ffcf62]" />
                </span>
              </p>
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
        <Container>
          <div className="dining_choma">
            <Row>
              <Col xs={12} sm={12} md={1}></Col>
              <Col xs={12} sm={12} md={5} className="choma_col" id="choma_col">
                <div
                  ref={chomaColRef}
                  className={inChomaView ? "elementShow" : "elementHide"}
                >
                  <h2>Fred's Ranch Mbuzi Choma.</h2>
                  <p>
                    Enjoy our sumptuous mbuzi choma as you celebate your events
                    or special occassions, such as a weekend family
                    get-together. It comes with a side of the famous staple food
                    ugali and to top it with an alluring fresh vegetable salad
                    (kachumbari). It doesn't get any better than this.
                  </p>
                  <img src={nyama_choma} alt="" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={5} className="my-3">
                <div
                  ref={chomaRef}
                  className={
                    inChomaRefView ? "elementShowSlower" : "elementHide"
                  }
                >
                  <img className="nyama_img" src={nyama_choma2} alt="" />
                </div>
              </Col>
              <Col xs={12} sm={12} md={1}></Col>
            </Row>
          </div>
        </Container>
        <div className="dining_menu">
          <Container>
            <h2 className="text-center">Checkout Our Menu</h2>
          </Container>
        </div>
        <Container>
          <div className="dining_gallery">
            <h2>Discover our Food Gallery</h2>
            <FoodGallery />
          </div>
        </Container>
      </div>
    </>
  );
}
