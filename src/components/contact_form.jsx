import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

function ContactForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-4" controlId="nameSection">
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-4" controlId="contactSection">
          <Row>
            <Col xs={12} sm={12} md={6}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Phone Number" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-4" controlId="itemSelection">
          <Form.Label>Which area should we help you on?</Form.Label>
          <Form.Select aria-label="Fred's Ranch Item Selection">
            <option>Open to select option</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="inquiryNarration">
          <Form.Label>Let us know how we could be of help</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
