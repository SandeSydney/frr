import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Amenities from "./amenities";
import FarmToFork from "./farmToFork";
import Features from "./features";
import HomeCarousel from "./homeCarousel";
import Landing from "./landing_page";
import MapLocation from "./maps";
import PaymentMethods from "./payment";
import Socials from "./socials";
import Welcome_Section from "./welcome";
import GoldVIP from "./goldvip";
import AdsCarousel from "./adsCarousel";
import BannerCarousel from "./bannerCarousel";
import AdsModal from "./adsModal";
import { useEffect } from "react";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Fred's Ranch and Resort</title>
        <link rel="canonical" href="https://fredsranch.co.ke/" />
      </Helmet>
      <div className="home">
        {/* <AdsCarousel /> */}
        {/* <HomeCarousel /> */}
        <BannerCarousel />
        <div className="landing">
          <Landing />
        </div>
      </div>
      <div className="hidden">
        <AdsModal />
      </div>

      <Welcome_Section />
      <FarmToFork />
      <Features />
      {/* <GoldVIP /> */}
      <Amenities />
      <div className="contact_main">
        <Container>
          <div className="map_socials">
            <MapLocation />
            <Socials />
          </div>
        </Container>
      </div>
      <PaymentMethods />
    </>
  );
}
