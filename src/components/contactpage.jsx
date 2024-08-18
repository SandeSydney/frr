import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact_form";
import ContactCard from "./contactCard";

function ContactUsPage() {
  return (
    <div className="contact_main">
      <div className="about_spacer"></div>
      <Container>
        <div className="contact_landing">
          <h1>Get in touch with Us</h1>
          <h2 className="text-2xl">
            Ready to experience an adventure you will live to remember?
          </h2>
        </div>
      </Container>
      <ContactCard />
      <div className="form_landing">
        <Container className="form_container">
          <ContactForm />
        </Container>
      </div>
    </div>
  );
}

export default ContactUsPage;
