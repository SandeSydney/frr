import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";
import { Link } from "react-router-dom";

export default function Nav_Section() {
  return (
    <Container>
      <div>
        <Link>
          <img
            className="w-28 md:w-40"
            src={frr_logo}
            alt="Fred's Ranch and Resort Logo"
          />
        </Link>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Link to="/">Home</Link>
          <Link to={"about-us"}>About Us</Link>
          <Link to={"dining"}>Dining</Link>
          <Link to={"events"}>Events</Link>
          <Link to={""}>Accommodation</Link>
          <Link to={""}>School</Link>
          <Link to={""}>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
