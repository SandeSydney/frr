import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Welcome_Section = () => {
  const [fadeRef, inView] = useInView({triggerOnce:true});

  return (
    <div className="welcome" id="welcome">
      <Container
        ref={fadeRef}
        className={inView ? "elementShow" : "elementHide"}
      >
        <Row className="px-4">
          <Col sm={12} md={6}>
            <div className="welcome_text">
              <p className="text-2xl md:text-3xl lg:text-4xl font-[Dancing-Script] italic">
                welcome to the <br />
                <span className="text-4xl md:text-5xl lg:text-8xl text-[#ffcf62] font-extrabold ">
                  cowboy <br /> experience...
                </span>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="welcome_text">
              <p className="font-[Dancing-Script] tracking-wider lg:text-lg">
                Welcome to{" "}
                <span className="text-xl underline underline-offset-4">
                  Fred's Ranch & Resort
                </span>
                , where serenity is blended in harmony with the Texas Cowboy
                Theme. Enjoy the natural background of beautiful lawns,
                haystacks, dairy cattle, Rhumba Music and smiling faces. We love
                our food! Chefs at Freds Ranch & Resort serve orginically
                prepared dishes, fresh from the farm. Titillate your palate with
                the delectable Kenyan Cuisine of tender meats from the grill and
                traditional vegetables from the farm. Create memories with us
                that you will forever reminisce about!
              </p>
              <Link to={"about-us"} className="view_more">Get to know more about us</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome_Section;
