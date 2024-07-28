import React from "react";
import Instagram from "../resources/logos/instagramLogo.png";
import Twitter from "../resources/logos/twitterLogo.png";
import Facebook from "../resources/logos/facebookLogo.png";
import Tiktok from "../resources/logos/tiktokLogo.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

function Socials() {
  const returnLink = "https://frr-v1.vercel.app/";

  return (
    <div className="socials">
      <h4>Follow Us On:</h4>
      <Container>
        <Row>
          <Col className="social_cols" xs={12}>
            <RouterLink
              to={`/redirect?targetLink=https://www.instagram.com/freds_ranch/&returnLink=${returnLink}`}
            >
              <img src={Instagram} alt="Fred's Ranch Instagram Page" /> Freds
              Ranch
            </RouterLink>
          </Col>
          <Col className="social_cols" xs={12}>
            <RouterLink
              to={`/redirect?targetLink=https://x.com/freds_ranch/&returnLink=${returnLink}`}
            >
              <img src={Twitter} alt="Fred's Ranch Twitter Page" /> freds_ranch
            </RouterLink>
          </Col>
          <Col className="social_cols" xs={12}>
            <RouterLink
              to={`/redirect?targetLink=https://www.facebook.com/fredsranch/&returnLink=${returnLink}`}
            >
              <img src={Facebook} alt="Fred's Ranch Facebook Page" /> fredsranch
            </RouterLink>
          </Col>
          <Col className="social_cols" xs={12}>
            <RouterLink
              to={`/redirect?targetLink=https://www.tiktok.com/@freds_ranch/&returnLink=${returnLink}`}
            >
              <img src={Tiktok} alt="Fred'd Ranch Tiktok Page" /> @freds_ranch
            </RouterLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Socials;
