import Carousel from 'react-bootstrap/Carousel';
import horse_back from "../resources/horse_back.jpg";
import table_setting from "../resources/table_setting.jpg"
import frr_school from "../resources/frr_school.jpg"
import karibu_entrance from "../resources/karibu_entrance.jpg"
import cabbana from "../resources/cabbana.jpg"

function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel_item">
        <img className="carousel_img" src={karibu_entrance} alt="img 1" />
        <Carousel.Caption className="carousel_caption">
          <p className="text-2xl md:text-7xl font-extrabold italic">Just Like Grandma's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img className="carousel_img" src={frr_school} alt="img 3" />
        <Carousel.Caption className="">
          <p className="text-lg font-bold">Fred's Ranch & Resort</p>
          <p className="text-lg font-bold">School of Hospitality</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;