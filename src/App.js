import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
import frr_logo from "./resources/frr-logo.png";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="w-40"
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
    </>
  );
}

export default App;
