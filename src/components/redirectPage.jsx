// This page serves to be an intermediary between the website and the social media handles from our site.
// It ensures tha customer goes back to our website after the social media checkout.

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const parameters = new URLSearchParams(location.search);
    const targetLink = parameters.get("target");
    const returnLink = parameters.get("returnLink");

    if (!targetLink || !returnLink) {
      console.error("Either the target or return link not specified");
      return;
    }

    // Add to the browser's navigate an entry
    navigate.push(location.pathname + location.search);

    // Send customer to the social media link after a small delay
    setTimeout(() => {
      window.location.href = targetLink;
    }, 1000);

    // Code to handle action on back button
    const handlePagePop = () => {
      window.location.href = returnLink;
    };

    window.addEventListener("popstate", handlePagePop);

    return () => {
      window.removeEventListener("popstate", handlePagePop);
    };
  }, [location, navigate]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default RedirectPage;
