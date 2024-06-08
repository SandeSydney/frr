import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";
import { useState } from "react";
import Nav_Section from "./nav_section";

export default function Navbar_Main() {
  // setting constant to determine if the navigation bar will be visible
  const [visible, setVisible] = useState(false);

  // function to toggle the navbar visibility by scrolling past a certain height.
  function toggleNavigation() {
    if (window.scrollY >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  // Adding an event listener for the window to monitor scrolling, calling the toggle navigation function
  window.addEventListener("scroll", toggleNavigation);

  return (
    <Navbar expand="md" className={visible ? "navbar_open" : ""}>
      <Nav_Section />
    </Navbar>
  );
}
