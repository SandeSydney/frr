import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact_form";

function ContactUsPage() {
  return (
    <div>
      <div className="about_spacer"></div>
      <Container>
        <div className="contact_landing">
          <h1>Get in touch</h1>
          <p className="font-['Dancing_Script'] text-2xl">Ready to experience an adventure you will live to remember?</p>
          <h2>LET US HEAR FROM YOU!</h2>
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
