import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import FarmFork from "../resources/mainGallery/FarmFork.png";
import { Link } from "react-router-dom";

function FarmToFork() {
  const [farmtoRef, inViewFarmTo] = useInView({ initialInView: false });

  return (
    <div className="farm_to_fork_landing">
      <Container
        ref={farmtoRef}
        className={inViewFarmTo ? "elementShow" : "elementHide"}
      >
        <div className={inViewFarmTo ? "elementShowSlower" : "elementHide"}>
          <img
            src={FarmFork}
            alt="Farm to Fork concept at Fred's Ranch and Resort"
          />
        </div>
        <div>
          <h2>Organic Farm-To-Fork Meals</h2>
          <p>
            Fred's Ranch and Resort has embodied the Farm-to-Fork concept. At
            least 60% of the food that lands on your plate is fresh from the
            organic farm.
          </p>
          <p>
            The Farm-Fresh meals are carefully crafted by the chefs to ensure
            you get that healthy, amazing taste lingering in your mouth all
            day...
          </p>
          <Link to={"dining"} className="view_more">More</Link>
        </div>
      </Container>
    </div>
  );
}

export default FarmToFork;
