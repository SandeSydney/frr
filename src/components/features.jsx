import EastSharpIcon from "@mui/icons-material/EastSharp";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import events from "../resources/mainGallery/events_desc.webp";
import playground from "../resources/mainGallery/playground.webp";
import chomaDisplay from "../resources/mainGallery/choma_hand.webp";
import wedding_ground from "../resources/mainGallery/wedding_ground.webp";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const [fadeRef, inView] = useInView({ triggerOnce: true });

  return (
    <div className="features">
      <Container className="features_container">
        <img src={chomaDisplay} alt="Mbuzi choma grill" />

        <div className="flex flex-col">
          <h2 className="text-center font-extrabold font-[Dancing-Script]">
            A Glimpse Of The Ranch
          </h2>
          <div className="features_glimpse">
            <div className="features_content">
              <p className="font-[Dancing-Script] tracking-wider lg:text-xl">
                Fred's Ranch & Resort is an integral part of Kajiado Getaways,
                and located 70 kilometers from Nairobi City Center, we set the
                standards for excellence in vacation experiences.The easy Rhumba
                Music playing in the background as you enjoy your favourite
                cocktail or having a dip in the exquisite swimming pool is
                definitely the perfect escape from the hustle of the city.
              </p>
              <div className="flex gap-1 content-center">
                <Link to={"events"} className="underline underline-offset-8">
                  Explore Events & Activities
                </Link>
                <EastSharpIcon />
              </div>
            </div>
            <div className="features_image">
              <img src={events} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
