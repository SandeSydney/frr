import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact_form";

function ContactUsPage() {
  return (
    <div>
      <Container>
        <div className="contact_landing">
          <h1>Get in touch</h1>
          <p>Ready to experience an adventure you will live to remember?</p>
        </div>
      </Container>
      <div className="form_landing">
        <Container>
          <ContactForm />
        </Container>
      </div>
    </div>
  );
}

export default ContactUsPage;
