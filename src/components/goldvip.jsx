import React from "react";
import { Container } from "react-bootstrap";

function GoldVIP() {
  return (
    <div className="gold-main">
      <Container className="vip-container">
        <div className="goldvip">
          <h2>Gold VIP Membership</h2>
          <p>
            Get to experience distinguished experience only at Fred's Ranch &
            Resort. The secret is by subscribing to the VIP Membership
            Programme. Fred's Ranch & Resort showers it's registered loyal
            clientele with amazing opportunities including endless access to
            amenities as the VIP Cabana, Swimming Pool, Organic Farm, and Horse
            Rides, among others.
          </p>
          <a href="https://gold-loyalty.fredsranch.co.ke">
            <button>Check it out</button>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default GoldVIP;
