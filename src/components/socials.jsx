import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import Facebook from "../resources/logos/facebookLogo.png";
import Instagram from "../resources/logos/instagramLogo.png";
import Tiktok from "../resources/logos/tiktokLogo.png";
import Twitter from "../resources/logos/twitterLogo.png";

function Socials() {
  return (
    <div className="socials">
      <h4>Follow Us On:</h4>
      <Row>
        <Col className="social_cols" xs={12}>
          <RouterLink
            to="https://www.instagram.com/freds_ranch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Fred's Ranch Instagram Page" /> Freds
            Ranch
          </RouterLink>
        </Col>
        <Col className="social_cols" xs={12}>
          <RouterLink to="">
            <img src={Twitter} alt="Fred's Ranch Twitter Page" /> freds_ranch
          </RouterLink>
        </Col>
        <Col className="social_cols" xs={12}>
          <RouterLink
            to="https://www.facebook.com/fredsranch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Fred's Ranch Facebook Page" /> fredsranch
          </RouterLink>
        </Col>
        <Col className="social_cols" xs={12}>
          <RouterLink
            to="https://www.tiktok.com/@freds_ranch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tiktok} alt="Fred'd Ranch Tiktok Page" /> @freds_ranch
          </RouterLink>
        </Col>
      </Row>
    </div>
  );
}

export default Socials;
