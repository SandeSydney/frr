import React from "react";
import americanExpress from "../resources/logos/americanExpress.png";
import equitybank from "../resources/logos/equity.png";
import mastercard from "../resources/logos/mastercard.png";
import unionpay from "../resources/logos/unionpay.png";
import visa from "../resources/logos/visa.png";
import mpesa from "../resources/logos/mpesa.png";
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
          <div className={inViewPay ? "elementShow" : "elementHide"}>
            <img
              src={equitybank}
              alt="Equity Payment method in Fred's Ranch and Resort"
            />
            <img
              src={americanExpress}
              alt="American Express Payment method in Fred's Ranch and Resort"
            />
            <img
              src={mastercard}
              alt="Mastercard Payment method in Fred's Ranch and Resort"
            />
            <img
              src={unionpay}
              alt="Union Pay Payment method in Fred's Ranch and Resort"
            />
            <img
              src={visa}
              alt="Visa Payment method in Fred's Ranch and Resort"
            />
            <img
              src={mpesa}
              alt="Mpesa Payment method in Fred's Ranch and Resort"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default PaymentMethods;
