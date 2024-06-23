import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";
import { Link } from "react-router-dom";

export default function Nav_Section() {
  return (
    <Container className="uppercase">
      <Navbar.Brand href="/">
        <Link>
          <img
            className="w-28 md:w-40"
            src={frr_logo}
            alt="Fred's Ranch and Resort Logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Link to="/">Home</Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
          
            <NavDropdown.Item>
              <Link to={"about-us"}>About Us</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to={"about-us"}>Location</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to={"dining"}>Dining</Link>
          <Link to={"events"}>Events & Activities</Link>
          <Link to={""}>Gallery</Link>
          <Link to={""}>School</Link>
          <Link to={""}>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
