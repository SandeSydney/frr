import React from "react";
import { Row, Col, Container, Carousel, Accordion } from "react-bootstrap";
import sinkDoor from "../resources/accommodationImages/sinkDoor.webp";
import bedSide from "../resources/accommodationImages/bedSide.webp";
import towels from "../resources/accommodationImages/towels.webp";
import outside from "../resources/accommodationImages/accommOutside.webp";

function AccommodationPage() {
  return (
    <>
      <div className="accommodation_landing">
        <div className="about_spacer"></div>
        <div className="accommodation_hero">
          <Container>
            <h1>"Your Recreational Escape"</h1>
          </Container>
        </div>
      </div>
      <div className="accomm_intro">
        <Container>
          <h4 className="font-bold">Accommodation Features</h4>
          <Row>
            <Col className="accom_features">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                color="white"
              >
                <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
              </svg>
              Bed
            </Col>
            <Col className="accom_features">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
              Bathroom
            </Col>
            <Col className="accom_features">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V196.9c-1.9 1.4-3.8 2.9-5.6 4.4C10.9 214.5 0 232.9 0 256c0 46.9 14.3 84.1 37 112.5c14.2 17.7 31.1 31.3 48.5 41.8L65.6 469.9c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H352c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8c22.7-28.4 37-65.5 37-112.5c0-23.1-10.9-41.5-26.4-54.6c-1.8-1.5-3.7-3-5.6-4.4V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM384 256.3c0 1-.3 2.6-3.8 5.6c-4.8 4.1-14 9-29.3 13.4C320.5 284 276.1 288 224 288s-96.5-4-126.9-12.8c-15.3-4.4-24.5-9.3-29.3-13.4c-3.5-3-3.8-4.6-3.8-5.6l0-.3 0-.1c0-1 0-2.5 3.8-5.8c4.8-4.1 14-9 29.3-13.4C127.5 228 171.9 224 224 224s96.5 4 126.9 12.8c15.3 4.4 24.5 9.3 29.3 13.4c3.8 3.2 3.8 4.8 3.8 5.8l0 .1 0 .3zM328.2 384l-.2 .5 0-.5h.2zM112 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
              Restroom
            </Col>
            <Col className="accom_features">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
              TV & DSTV
            </Col>
            <Col className="accom_features">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
              Breakfast
            </Col>
            <Col className="accom_features">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
              Wi-Fi
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-[#c49464] h-4"></div>
      <div className="accommodation_content">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className="content_cols">
              <h2>Description</h2>
              <p>
                Our accommodation gives you a "home away from home" kind of
                experience. We have 3 different options of accommodation:{" "}
                <span className="font-bold">
                  Cottages, Apartments, & Camping
                </span>
                .
              </p>
              <p>
                Our Cottages are warm and cosy done with the African makuti
                feel. They are fully equipped with TV, Wi-Fi, and Hot Showers.
                They are ideal for couples and individuals.
              </p>
              <p>
                Our Apartments are spacious, warm, and fully equipped with
                kitchen equipment and a TV set. The apartments are ideal for
                either a family or a group.
              </p>
              <p>
                Our Camping Tents give you a wild experience. They come with
                beddings and a planned bonfire experience to keep you warm as
                you create memories. These camping tents are ideal for school
                children, families, friends or couples.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} className="content_cols">
              <Carousel fade>
                <Carousel.Item interval={800}>
                  <img src={sinkDoor} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                  <img src={bedSide} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                  <img src={towels} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={800}>
                  <img src={outside} alt="" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="accommodation_packages">
        <Container className="cover_container">
          <h2 id="header">Accommodation Packages</h2>
          <Container>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Single Room</Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p>Ksh. 5,500</p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 6,200</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 7,700</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>Ksh. 9,200</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Double Room</Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p>Ksh. 7,500</p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 8,500</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 11,500</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>sh. 14,500</p>K
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Children (3 - 8 Years)</Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p>Ksh. 3,000</p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 4,500</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 5,500</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>Ksh. 6,500</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Camping with FRR Tent (per person)
                </Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p>Ksh. 4,000</p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 6,000</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 8,000</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>Ksh. 10,000</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Camping with own Tent</Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p>Ksh. 2,500</p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 4,000</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 6,000</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>Ksh. 8,000</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Honeymooners Package</Accordion.Header>
                <Accordion.Body>
                  <div className="prices">
                    <h6>Bed Only :</h6>
                    <p></p>
                  </div>
                  <div className="prices">
                    <h6>Bed & Breakfast : </h6>
                    <p>Ksh. 13,000</p>
                  </div>
                  <div className="prices">
                    <h6>Half Day :</h6>
                    <p>Ksh. 16,000</p>
                  </div>
                  <div className="prices">
                    <h6>Full Day :</h6>
                    <p>Ksh. 20,000</p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default AccommodationPage;
