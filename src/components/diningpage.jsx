import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { Element, Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import nyama_choma from "../resources/foodImageGallery/chomaHold.webp";
import Beverages from "./beverages";
import MeatyTreats from "./meatyTreats";
import StarchItems from "./starchItems";
import foodMenu from "../resources/foodMenu/FredsRanch-FoodMenu.pdf";

export default function DiningPage() {
  const location = useLocation();

  // useInView to animate items on view
  const [landingRef, inLandingView] = useInView();
  const [chomaColRef, inChomaView] = useInView();
  const [diningRef, inDiningRefView] = useInView();

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
              <h1 className="font-bold">- Elegance With Every Bite -</h1>
              <p className="text-white text-xl md:text-2xl font-semibold font-[Alegreya SC]">
                ... If you haven't had our mbuzi choma then you haven't tasted
                the Kajiado's Finest!{" "}
                <span>
                  <FormatQuoteIcon className="text-[#ffcf62]" />
                </span>
              </p>
              <button className="text-white mt-5 text-xs md:text-sm underline underline-offset-8">
                <div
                  className={
                    inLandingView ? "elementShowSlower" : "elementHide"
                  }
                >
                  <ScrollLink
                    to="dining_text"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                  >
                    Scroll Down &nbsp;
                    <SouthSharpIcon />
                  </ScrollLink>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="fresh_dining">
          <Container
            ref={diningRef}
            className={inDiningRefView ? "elementShow" : "elementHide"}
          >
            <h2 id="dining_text">Organic Farm-Fresh Meals</h2>
            <div>
              <p
                className={
                  inDiningRefView ? "elementShowSlower" : "elementHide"
                }
              >
                Welcome to the home of wholesome dining on{" "}
                <b>Organic Farm-Fresh Produce</b>. Fred's Ranch and Resort is
                nested within a 10-acre Organic Farm. At least 60% of the meals
                we serve comes directly from the farm to your plates.
              </p>
              <p
                className={
                  inDiningRefView ? "elementShowSlower" : "elementHide"
                }
              >
                This is a result of our commitment to high value, quality, and
                sustainability. At Fred's Ranch and Resort, we give you an
                experience of superior nutrition and vibrant flavors, just
                cultivated close to where you dine.
              </p>
            </div>
          </Container>
        </div>
        <Container>
          <div className="dining_choma">
            <div>
              <img src={nyama_choma} alt="" />
            </div>
            <div
              ref={chomaColRef}
              className={inChomaView ? "elementShow" : "elementHide"}
            >
              <h2>Fred's Ranch Mbuzi Choma.</h2>
              <p>
                Enjoy our sumptuous mbuzi choma as you celebate your events or
                special occassions, such as a weekend family get-together. You
                can have it with a side of the famous staple food ugali and to
                top it with an alluring fresh vegetable salad. It doesn't get
                any better than this!
              </p>
            </div>
          </div>
        </Container>
        <div className="dining_menu">
          <Container>
            <h2 className="text-center">Check Out Our Menu</h2>
            <div className="foodMenu">
              <iframe
                src={foodMenu}
                frameborder="0"
                title="Fred's Ranch and Resort Food Menu"
              ></iframe>
            </div>
          </Container>
        </div>
        <Container>
          <div className="dining_gallery">
            <Element id="foodGallery">
              <h2>Discover our Food Gallery</h2>
            </Element>
            <Tabs
              defaultActiveKey="meaty_treats"
              id="menu_tabs"
              className="mb-3"
              justify
            >
              <Tab eventKey="starches" title="Starches">
                <StarchItems />
              </Tab>
              <Tab eventKey="meaty_treats" title="Meaty Treats">
                <MeatyTreats />
              </Tab>
              <Tab eventKey="beverages" title="Beverages">
                <Beverages />
              </Tab>
              {/* <Tab eventKey="veges_salads" title="Veges & Salads">
                Veges & Salad
              </Tab> */}
            </Tabs>
          </div>
        </Container>
      </div>
      <div className="pageLink">
        <Container>
          <RouterLink to={"/events"}>Events we offer</RouterLink>
        </Container>
      </div>
    </>
  );
}
