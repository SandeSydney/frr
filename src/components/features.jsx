import Container from "react-bootstrap/Container";
import sunset_pool from "../resources/sunset_pool.jpg";

export default function Features() {
  return (
    <div className="features">
      <Container className="features_container">
        <img src={sunset_pool} alt="feature image" />

        <div>
          <h2>Main View Of The Ranch</h2>
        </div>
        <div>images & text</div>
      </Container>
    </div>
  );
}
