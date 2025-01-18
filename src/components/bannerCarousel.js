import React from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import grandma_xmas from "../resources/posters/Cowboy Meets Grandma Package.webp";
import ikutoke_poster from "../resources/posters/Ikutoke poster.webp";
import FestiveMenuModal from "./festiveMenuModal";
import cabbana from "../resources/mainGallery/cabbanaImage.webp";
import farm from "../resources/mainGallery/farmLarge.webp";
import swimmingNight from "../resources/mainGallery/swimmingNightLg.webp";
import cowsBack from "../resources/mainGallery/cowsBack.webp";
import uncleCows from "../resources/mainGallery/uncleCows.webp";
import divingLg from "../resources/mainGallery/divingLg.webp";
import teamBuildingLg from "../resources/mainGallery/teamBuildingLg.webp";
import chomaRibsLg from "../resources/mainGallery/chomaRibsLg.webp";

function BannerCarousel() {
  const [modalShow, setModalShow] = React.useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Container>
      {/* <FestiveMenuModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <div className="banner-carousel-main">
        <div className="carousel-div">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={true}
            infinite={true}
            itemClass="banner-carousel-items"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={true}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            ssr={true}
          >
            <Image
              src={cabbana}
              alt="Cabbana Image"
              title="Fred's Ranch and Resort"
              loading="eager"
            />
            <Image
              src={farm}
              alt="Farm image"
              title="Fred's Ranch and Resort Farm tour"
              loading="eager"
            />
            <Image
              src={teamBuildingLg}
              alt="Fred's Ranch Cows from the back"
              title="Fred's Ranch and Resort Team Building"
              loading="eager"
            />
            <Image
              src={chomaRibsLg}
              alt="Farm image"
              title="Fred's Ranch and Resort Nyama Choma"
              loading="eager"
            />
            <Image
              src={divingLg}
              alt="Fred's Ranch Cows from the back"
              title="Fred's Ranch and Resort Diving"
              loading="eager"
            />
            <Image
              src={cowsBack}
              alt="Fred's Ranch Cows from the back"
              title="Fred's Ranch and Resort Dairy cows back"
              loading="eager"
            />
          </Carousel>
        </div>
        {/* <div className="carousel-left">
          <button
            className="festive-menu-btn"
            onClick={() => setModalShow(true)}
          >
            Fred's Ranch Festive Menu
          </button>
        </div> */}
      </div>
    </Container>
  );
}

export default BannerCarousel;
