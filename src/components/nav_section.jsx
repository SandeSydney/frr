import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";

export default function Nav_Section() {
  return (
    <Container className="uppercase">
      <Navbar.Brand href="/">
        <img
          className="w-28 md:w-40"
          src={frr_logo}
          alt="Fred's Ranch and Resort Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="">Home</Nav.Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="">About Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Location</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="">Dining</Nav.Link>
          <Nav.Link href="">Events & Activities</Nav.Link>
          <Nav.Link href="">Gallery</Nav.Link>
          <Nav.Link href="">School</Nav.Link>
          <Nav.Link href="">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
