import React from "react";
import americanExpress from "../resources/logos/americanExpress.webp";
import equitybank from "../resources/logos/equity.webp";
import mastercard from "../resources/logos/mastercard.webp";
import unionpay from "../resources/logos/unionpay.webp";
import visa from "../resources/logos/visa.webp";
import mpesa from "../resources/logos/mpesa.webp";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function PaymentMethods() {
  const [paymentRef, inViewPay] = useInView({
    initialInView: false,
    threshold: 0.3,
  });

  return (
    <>
      <div>
        <Container className="payment_methods">
          <h4
            ref={paymentRef}
            className={inViewPay ? "elementShow" : "elementHide"}
          >
            Payment Methods Accepted
          </h4>
          <div>
            <img
              src={equitybank}
              alt="Equity Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
            <img
              src={americanExpress}
              alt="American Express Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
            <img
              src={mastercard}
              alt="Mastercard Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
            <img
              src={unionpay}
              alt="Union Pay Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
            <img
              src={visa}
              alt="Visa Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
            <img
              src={mpesa}
              alt="Mpesa Payment method in Fred's Ranch and Resort"
              title="Fred's Ranch payment method"
              loading="lazy"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default PaymentMethods;
