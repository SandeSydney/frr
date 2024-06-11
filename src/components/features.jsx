import Container from "react-bootstrap/Container";
import sunset_pool from "../resources/sunset_pool.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cocktail from "../resources/cocktail.jpg";
import events from "../resources/events_desc.jpg";
import arrow_right from "../resources/arrow_right.png";
import playground from "../resources/playground.jpg";
import swimming_night from "../resources/swimming_night.jpg";
import wedding_ground from "../resources/wedding_ground.jpg"
import EastSharpIcon from '@mui/icons-material/EastSharp';

export default function Features() {
  return (
    <div className="features">
      <Container className="features_container">
        <img src={sunset_pool} alt="feature image" />

        <div className="flex flex-col gap-5">
          <h2 className="text-center font-extrabold font-[Dancing-Script]">
            A Glimpse On The Nature Of The Ranch
          </h2>
          <div className="features_glimpse">
            <Row className="">
              <Col sm={12} md={6}>
                <div className="flex flex-col gap-4">
                  <p className="font-[Dancing-Script] tracking-wider lg:text-xl">
                    Fred's Ranch & Resort is an integral part of Kajiado
                    Getaways, and located 70 kilometers from Nairobi City
                    Center, we set the standards for excellence in vacation
                    experiences.The easy Rhumba Music playing in the background
                    as you enjoy your favourite cocktail or having a dip in the
                    exquisite swimming pool is definitely the perfect escape
                    from the hustle of the city.
                  </p>
                  <div className="flex gap-1 content-center">
                    <p className="underline underline-offset-8">
                      Explore Events & Activities
                    </p>
                    <EastSharpIcon/>
                  </div>
                  <img className="mb-3" src={wedding_ground} alt="wedding grounds" width="" />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="flex flex-col gap-4">
                  <img src={events} alt="Events Image" />
                  <img src={playground} alt="Playground" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
