import { Container } from "react-bootstrap";

const MapLocation = () => {
  return (
    <Container>
      <div className="py-7">
        <h4
          style={{
            fontFamily: "Alegreya SC",
            textDecoration: "underline double #c49464",
            textUnderlineOffset: "12px",
            marginBottom: "15px",
          }}
        >
          Our Location
        </h4>
        <div className="maplocation">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.134663633773!2d36.871432374048155!3d-1.6645740361546304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fb967331ddf7b%3A0xb28a05cfdd96bc35!2sFred&#39;s%20Ranch%20and%20Resort!5e0!3m2!1sen!2ske!4v1721035307148!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default MapLocation;
