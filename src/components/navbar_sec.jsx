import Navbar from "react-bootstrap/Navbar";
import Nav_Section from "./nav_section";
import logoWhite from "../resources/logos/logoWhite.webp";

export default function NAVBAR_SEC() {
  return (
    <Navbar expand="md" className="navbar_sec">
      <Nav_Section logoSrc={logoWhite} />
    </Navbar>
  );
}
