import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <section className="flex w-full justify-center">
      <div className="px-3">
        <p className="text-center underline underline-offset-8 font-bold text-3xl">
          ABOUT US
        </p>
        <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <p className="main_text">
              Fred's Ranch & Resort is an integral part of Kajiado Getaways,
              setting the standards for excellence in vacation experiences. It
              is located 70 kilometers from Nairobi City Center, built on a 10
              acre farm with a spread of Cowboy theme against the natural
              background of beautiful lawns, haystacks, dairy cattle and smiling
              faces.
            </p>
            <p className="main_text">
              The easy Rhumba Music playing in the background as you enjoy your
              favourite cocktail or having a dip in the exquisite swimming pool
              is definitely the perfect escape from the hustle of the city.
              Truly, Fred's Ranch & Resort is the best place to visit in
              Kitengela.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6}>
          <p className="main_text">
              Most importantly, we love our food! Chefs at Freds Ranch & Resort
              serve orginically prepared dishes, fresh from the farm, and
              designed to titillate your palate with the delectable Kenyan
              Cuisine of tender meats from the grill and traditional vegetables
              from the farm. Fred's Ranch & Resort is a great choice if you are
              looking for the best Nyama Choma places in Kitengela.
            </p>
            
            <p className="main_text">
              You have to be at Fred's Ranch & Resort to understand and
              experience the Vibe!
            </p>
          </Col>
        </Row>
        </Container>
        <div className="flex flex-col gap-3"></div>
      </div>
    </section>
  );
}
