import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Welcome_Section = () => {
  return (
    <div className="welcome">
      <Container>
        <Row className="px-4">
          <Col sm={12} md={6}>
            <div>
              <p className="text-2xl md:text-3xl font-[Dancing-Script] italic">
                welcome to the <br />
                <span className="text-5xl md:text-7xl text-[#ffcf62] font-extrabold ">
                  cowboy <br /> experience...
                </span>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div>
              <p className="font-[Dancing-Script] tracking-wider">
                Welcome to <span className="text-xl">Fred's Ranch & Resort</span>, where serenity is blended in
                harmony with the Texas Cowboy Theme. Enjoy the natural
                background of beautiful lawns, haystacks, dairy cattle, Rhumba
                Music and smiling faces. We love our food! Chefs at Freds Ranch
                & Resort serve orginically prepared dishes, fresh from the farm.
                Titillate your palate with the delectable Kenyan Cuisine of
                tender meats from the grill and traditional vegetables from the
                farm. Create memories with us that you will forever reminisce
                about!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome_Section;
