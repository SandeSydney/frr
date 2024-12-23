import React from "react";
import Image from 'react-bootstrap/Image';
import rhumba_rockout from "../resources/posters/DJ-Simbi-12Dec.gif";

function AdsCarousel() {
  return (
    <div className="ads-carousel-main">
      <div className="ads-carousel-top"></div>
      <div className="ads-carousel-content">
      <Image alt="Rhumba Fred's Ranch 12th December" title="Rhumba Fred's Ranch 12th December"  loading="lazy" src={rhumba_rockout} fluid />;
        {/* <img src={rhumba_rockout} alt="" /> */}
      </div>
    </div>
  );
}

export default AdsCarousel;
