import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function GoldVIP() {
  // Check to see if component is scrolled into view
  const [goldRef, inViewGold] = useInView();

  return (
    <div className="gold-main">
      <Container className="vip-container">
        <div className="goldvip">
          <h2
            ref={goldRef}
            className={inViewGold ? "elementShow" : "elementHide"}
          >
            Gold VIP Membership
          </h2>
          <p
            ref={goldRef}
            className={inViewGold ? "elementShowSlower" : "elementHide"}
          >
            Get to experience distinguished service only at Fred's Ranch &
            Resort. The secret is by subscribing to the VIP Membership
            Programme. Fred's Ranch & Resort showers it's registered loyal
            clientele with amazing opportunities including endless access to
            amenities as the VIP Cabana, Swimming Pool, Organic Farm, and Horse
            Rides, among others.
          </p>
          <a
            ref={goldRef}
            className={inViewGold ? "elementShowSlower" : "elementHide"}
            href="https://gold-loyalty.fredsranch.co.ke"
          >
            <button>Check it out</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default GoldVIP;
