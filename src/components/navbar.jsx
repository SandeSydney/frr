import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";
import { useState } from "react";

export default function Navbar_Main() {
  // setting constant to determine if the navigation bar will be visible
  const [visible, setVisible] = useState(false);

  // function to toggle the navbar visibility by scrolling past a certain height.
  function toggleNavigation() {
    if (window.scrollY >= 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  // Adding an event listener for the window to monitor scrolling, calling the toggle navigation function
  window.addEventListener("scroll", toggleNavigation);

  return (
      <Navbar expand="md" className={visible?"navbar_open":"navbar_closed"}>
        <Container>
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
              <NavDropdown title="Restaurant" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Food Menu</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Events & Activities</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Accomodation</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Agritourism</Nav.Link>
              <Nav.Link href="">School</Nav.Link>
              <Nav.Link href="">Contact Us</Nav.Link>
              <Nav.Link href="">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
