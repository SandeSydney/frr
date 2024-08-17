import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../resources/mainGallery/frontOffice.webp";

function WhatsappCta() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="254792564243"
        accountName="Fred's Ranch and Resort"
        avatar={logo}
        chatMessage="Hi there! How can I assist you today?"
        statusMessage="Typically replies within 10 min"
        placeholder="Write here..."
        allowEsc={true}
      />
    </div>
  );
}

export default WhatsappCta;
