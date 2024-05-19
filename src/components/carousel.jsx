import Carousel from 'react-bootstrap/Carousel';
import horse_back from "../resources/horse_back.jpg";
import table_setting from "../resources/table_setting.jpg"
import frr_school from "../resources/frr_school.jpg"
import karibu_entrance from "../resources/karibu_entrance.jpg"
import cabbana from "../resources/cabbana.jpg"

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={karibu_entrance} alt="img 1" />
        <Carousel.Caption className="carousel_caption">
          <p style={{fontStyle:'italic', fontSize:"30px"}}>Feels Just Like Grandma's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={table_setting} alt="img 2" />
        <Carousel.Caption className="carousel_caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={frr_school} alt="img 3" />
        <Carousel.Caption className="carousel_caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;