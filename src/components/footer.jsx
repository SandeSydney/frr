import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import frr_logo from "../resources/frr-logo.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Footer = () => {
  return (
    <>
      <div className="h-5 bg-[#303e44]"></div>
      <footer>
        <Container>
          <Row className="foot_details">
            <Col xs={12} sm={12} md={3}>
              <img src={frr_logo} alt="Fred's Ranch Logo" />
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h3>Quick Links</h3>
              <p>Home </p>
              <p>About Us</p>
              <p>Dining</p>
              <p>Gallery</p>
              <p>Events & Activities</p>
              <p>School</p>
              <p>Contact Us</p>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <h3>Address</h3>
              <p>P.O BOX 192,</p>
              <p>Isinya, Namanga Road, </p>
              <p> Kajiado, Kenya.</p>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h3>Get In Touch</h3>
              <p>
                <PhoneAndroidIcon /> &nbsp;
                <a href="tel:+254792564243">+254792564243</a>{" "}
              </p>
              <p>
                <PhoneAndroidIcon /> &nbsp;
                <a href="tel:+254791323785">+254791323785</a>
              </p>
            </Col>
          </Row>
          <Row className="h-10 md:content-center">
            <Col xs={12} sm={12} md={4}>
              &copy; 2024 All rights reserved
            </Col>
            <Col xs={12} sm={12} md={4} className="md:text-center">
              Machoka International Group Limited
            </Col>
            <Col xs={12} sm={12} md={4} className="md:text-right">
              Privacy Policy | Terms and Conditions
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
