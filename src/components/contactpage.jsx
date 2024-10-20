import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact_form";
import ContactCard from "./contactCard";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  return (
    <div className="contact_main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - Fred's Ranch and Resort</title>
        <link rel="canonical" href="https://fredsranch.co.ke/contact-us" />
      </Helmet>
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
