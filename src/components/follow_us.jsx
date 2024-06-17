import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FollowUS = () => {
  return (
    <div className="follow_us">
      <Container>
        <h3>Follow Us:</h3>
        <Row>
          <Col>
            <FacebookIcon />
          </Col>
          <Col>
            <YouTubeIcon />
          </Col>
          <Col>
            <XIcon />
          </Col>
          <Col>
            <InstagramIcon />
          </Col>
          <Col>
            <WhatsAppIcon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FollowUS;
