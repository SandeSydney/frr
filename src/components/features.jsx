import EastSharpIcon from "@mui/icons-material/EastSharp";
import Container from "react-bootstrap/Container";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import chomaDisplay from "../resources/mainGallery/choma_hand.webp";
import events from "../resources/mainGallery/events_desc.webp";

export default function Features() {
  const [glimpseRef, inView] = useInView();
  const [glimpseRef1, inRef1View] = useInView();
  const [glimpseImgRef, inViewImage] = useInView({
    initialInView: false,
    threshold: 0.3,
  });

  return (
    <div className="features">
      <Container className="features_container">
        <img src={chomaDisplay} alt="Mbuzi choma grill" title="Fred's Ranch Mbuzi choma" loading="eager"/>

        <div className="flex flex-col">
          <div
            ref={glimpseRef}
            className={inView ? "elementShow" : "elementHide"}
          >
            <h2 className="text-center" style={{ fontFamily: "Alegreya SC" }}>
              A Glimpse Of The Ranch
            </h2>
          </div>

          <div className="features_glimpse">
            <div className="features_content">
              <div
                ref={glimpseRef1}
                className={inRef1View ? "elementShowSlower" : "elementHide"}
              >
                <p className="font-[Dancing-Script] tracking-wider lg:text-xl">
                  Fred's Ranch & Resort is an integral part of Kajiado Getaways.
                  Located just 70 kilometers from Nairobi City Center, Fred's
                  Ranch and Resort sets the standards for excellence in vacation
                  experiences.The easy Rhumba Music playing in the background as
                  you enjoy your favourite cocktail or having a dip in the
                  exquisite swimming pool is definitely the perfect escape from
                  the hustle of the city.
                </p>
              </div>
              <div className="flex gap-1 content-center">
                <div
                  className={inRef1View ? "elementShowSlower" : "elementHide"}
                >
                  <Link to={"events"} className="underline underline-offset-8">
                    Explore Events & Activities
                  </Link>
                  <EastSharpIcon />
                </div>
              </div>
            </div>
            <div className="features_image">
              <img
                ref={glimpseImgRef}
                className={inViewImage ? "elementShowSlower" : "elementHide"}
                src={events}
                alt="Events Description"
                title="Fred's Ranch Events" loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
