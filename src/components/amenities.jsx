import CategoryIcon from "@mui/icons-material/Category";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import CottageIcon from "@mui/icons-material/Cottage";
import DeckSharpIcon from "@mui/icons-material/DeckSharp";
import FestivalIcon from "@mui/icons-material/Festival";
import FestivalSharpIcon from "@mui/icons-material/FestivalSharp";
import FollowTheSignsSharpIcon from "@mui/icons-material/FollowTheSignsSharp";
import GrassSharpIcon from "@mui/icons-material/GrassSharp";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import PoolSharpIcon from "@mui/icons-material/PoolSharp";
import SpaIcon from "@mui/icons-material/Spa";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Amenities = () => {
  // inView to capture observed elements
  const [elementRef, inView] = useInView();

  return (
    <section className="amenities">
      <Container
        ref={elementRef}
        className={inView ? "elementVisible" : "elementInvisible"}
      >
        <div className="offers">
          <Row className="flex-1">
            <Col sm={12} md={6}>
              <p className="font-bold text-4xl">Exquisite Amenities</p>
              <p className="font-bold text-5xl text-[#c49464]">We Offer</p>
            </Col>
          </Row>
          <div className="offers_list">
            <Row>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <CoPresentIcon />
                  WEDDING GROUNDS
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <FestivalIcon />
                  BANQUET HALL
                </div>
              </Col>

              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <PoolSharpIcon />
                  SWIMMING POOL
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <SpaIcon />
                  HORSE RIDES
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <DeckSharpIcon />
                  RESTAURANT
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <CottageIcon />
                  COTTAGES
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <FollowTheSignsSharpIcon />
                  FARM TOUR
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <FestivalSharpIcon />
                  CAMPING
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <CategoryIcon />
                  KIDS PLAYGROUND
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <Groups2SharpIcon />
                  TEAM BUILDING
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <GrassSharpIcon />
                  ORGANIC PRODUCE
                </div>
              </Col>
              <Col xs={6} sm={6} md={3}>
                <div className="items">
                  <StarHalfSharpIcon />
                  VIP LOUNGE
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="explore">
          <p className="font-bold text-4xl text-center">
            Peek At Our
            <span className="text-[#c49464]"> Gallery</span>
          </p>
          <p>
            Spending time at our ranch is both relaxing and breathtaking. You
            get to enjoy a serene and tranquil environment, <br />
            leaving happier than you came.
          </p>
          <Link to="/dining#foodGallery">
            <button>
              <TrendingFlatIcon />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Amenities;
