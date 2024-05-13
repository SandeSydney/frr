import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Brand href="">Fred's Ranch & Resort</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
          <NavDropdown title="Restaurant" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Food Menu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Events & Activities
              </NavDropdown.Item>
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

export default NavigationBar;