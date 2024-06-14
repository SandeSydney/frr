import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"

const Footer = () => {
  return <>
  <div className="h-5 bg-[#303e44]"></div>
  <footer>
    <Container>
        <Row></Row>
        <Row>
            <Col xs={12} sm={12} md={4}>
                &copy; 2024 All rights reserved
            </Col>
            <Col xs={12} sm={12} md={4}>
                Machoka International Group Limited
            </Col>
            <Col xs={12} sm={12} md={4}>
                Privacy Policy | Terms and Conditions
            </Col>
        </Row>
    </Container>
  </footer>
  </>;
};

export default Footer;
