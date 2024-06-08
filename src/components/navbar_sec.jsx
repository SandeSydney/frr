import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import frr_logo from "../resources/frr-logo.png";
import { useState } from "react";
import Nav_Section from "./nav_section";

export default function Navbar_Sec() {
  return (
    <Navbar expand="md" className="navbar_sec">
      <Nav_Section />
    </Navbar>
  );
}
