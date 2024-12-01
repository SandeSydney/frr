import React from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rhumba_rockout from "../resources/posters/DJ-Simbi-12Dec.gif";
import grandma_xmas from "../resources/posters/Cowboy Meets Grandma Package.webp";

function BannerCarousel() {
  return (
    <Container>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass="banner-carousel-items"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
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
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide
        swipeable
      >
        <Image
          alt="Rhumba Fred's Ranch 12th December"
          title="Rhumba Fred's Ranch 12th December"
          loading="eager"
          src={rhumba_rockout}
          fluid
        />
        <Image
          alt="Christmas Fred's Ranch 25th December"
          title="Christmas Fred's Ranch 25th December"
          loading="eager"
          src={grandma_xmas}
          fluid
        />
      </Carousel>
    </Container>
  );
}

export default BannerCarousel;
