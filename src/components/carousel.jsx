import Carousel from 'react-bootstrap/Carousel';
import frr_school from "../resources/frr_school.jpg";
import karibu_entrance from "../resources/karibu_entrance.jpg";

function MainCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel_item">
        <img className="carousel_img" src={karibu_entrance} alt="Carousel Image 1" />
        <Carousel.Caption className="carousel_caption font-[Dancing-script]">
          <p className="text-2xl md:text-7xl font-extrabold italic">Just Like Grandma's</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img className="carousel_img" src={frr_school} alt="Carousel Image 2" />
        <Carousel.Caption className="school_caption">
          <p className="text-3xl md:text-7xl font-bold text-[#114344] school_stroke">SCHOOL OF HOSPITALITY</p>
          <p className='text-base md:text-3xl font-bold italic font-[Dancing-script] text-[#6d401f]'>A Center of Excellence in Tourism & Hospitality</p>
          <button className="border px-3 py-1 md:border-3 md:px-7 md:py-2 md:text-2xl text-white">MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;