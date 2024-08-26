import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const form = useRef();

  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone = useRef();
  const description = useRef();

  const getPostDate = new Date();

  // const db = getFirestore();

  const successToast = () => {
    toast("Thank you for your feedback!");
  };

  // Send Email to our own servers, and send to client too
  const sendEmail = (e) => {
    e.preventDefault();

    // condition that all the values needed are present
    if (
      firstname.current.value.trim() !== "" &&
      lastname.current.value.trim() !== "" &&
      email.current.value.trim() !== "" &&
      phone.current.value.trim() !== "" &&
      description.current.value.trim() !== ""
    ) {
      emailjs
        .sendForm("service_wywsr2b", "template_f45613i", form.current, {
          publicKey: "ITf-aqrhDbMn7G34M",
        })
        .then(
          () => {
            successToast();

            // Clear the fields
            firstname.current.value = "";
            lastname.current.value = "";
            email.current.value = "";
            phone.current.value = "";
            description.current.value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      {" "}
      <div className="form_div">
        <form ref={form} action="" onSubmit={sendEmail}>
          <input type="date" name="date" value={getPostDate} hidden />
          <div className="control_main">
            <div className="form_control">
              <label htmlFor="firstname">First Name*:</label>
              <input
                ref={firstname}
                type="text"
                name="firstname"
                id="firstname"
                required
              />
            </div>
            <div className="form_control">
              <label htmlFor="lastname">Last Name*:</label>
              <input
                ref={lastname}
                type="text"
                id="lastname"
                name="lastname"
                required
              />
            </div>
          </div>
          <div className="control_main">
            <div className="form_control">
              <label htmlFor="email">Email*:</label>
              <input
                ref={email}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="form_control">
              <label htmlFor="phone">Phone Number*:</label>
              <input ref={phone} type="tel" name="phone" id="phone" required />
            </div>
          </div>
          <div>
            <div className="form_control">
              <label htmlFor="selectItem">Which area can we be of help?</label>
              <select name="selectItem" id="selectItem">
                <option value="choose_option" selected disabled hidden>
                  Choose Option
                </option>
                <option value="reservation">Reservation</option>
                <option value="restaurant">Restaurant</option>
                <option value="accommodation">Accommodation</option>
                <option value="school">School</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form_control">
              <label htmlFor="description">Let us know how</label>
              <textarea
                ref={description}
                name="description"
                id="description"
                placeholder="Type here..."
                rows={4}
              ></textarea>
            </div>
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
