import Carousel from 'react-bootstrap/Carousel';
import horse_back from "../resources/horse_back.jpg";
import table_setting from "../resources/table_setting.jpg"
import frr_school from "../resources/frr_school.jpg"

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={horse_back} alt="img 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={table_setting} alt="img 2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item" interval={1000}>
        <img className="carousel_img" src={frr_school} alt="img 3" />
        <Carousel.Caption>
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