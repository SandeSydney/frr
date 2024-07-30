import React from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";

function WhatsappCta() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+254792564243" // Required
        accountName="Fred's Ranch and Resort" // Optional
        // avatar="../" // Optional
        initialMessageByServer="Hi there! How can I assist you?" // Optional
        statusMessage="Available" // Optional
        placeholder="Write here..." // Optional
        allowEsc={true} // Optional
        // Explore all available props below
      />
    </div>
  );
}

export default WhatsappCta;
