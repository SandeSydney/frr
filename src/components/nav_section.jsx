import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function Nav_Section({ logoSrc }) {
  return (
    <Container>
      <div>
        <Link>
          <img
            className="w-28 md:w-40"
            src={logoSrc}
            alt="Fred's Ranch and Resort Logo"
            title="Fred's Ranch and Resort Logo"
            loading="eager"
          />
        </Link>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"about-us"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            About Us
          </NavLink>
          <NavLink
            to={"dining"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Dining
          </NavLink>
          <NavLink
            to={"events"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Events
          </NavLink>
          <NavLink
            to={"accommodation"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Accommodation
          </NavLink>
          <NavLink
            to={"entertainment"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Entertainment
          </NavLink>
          <NavLink
          to="https://gold-loyalty.fredsranch.co.ke/">
            Membership
          </NavLink>
          <NavLink
          to="https://careers.fredsranch.co.ke">
            Careers
          </NavLink>
          <NavLink
            to={"contact-us"}
            className={({ isActive }) =>
              [isActive ? "linkActive" : ""].join(" ")
            }
          >
            Contact Us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}
