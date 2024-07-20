import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Nav_Section({logoSrc}) {
  return (
    <Container>
      <div>
        <Link>
          <img
            className="w-28 md:w-40"
            src={logoSrc}
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
          <Link to={"accommodation"}>Accommodation</Link>
          <Link to={""}>Entertainment</Link>
          <Link to={"contact-us"}>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
