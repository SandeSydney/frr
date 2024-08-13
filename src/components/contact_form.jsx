import React, { useRef, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ScrollRestoration } from "react-router-dom";

function ContactForm() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone = useRef();
  const selectItem = useRef();
  const description = useRef();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    selectItem: "",
    description: "",
  });

  const db = getFirestore();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      firstname.current.value.trim() !== "" &&
      lastname.current.value.trim() !== "" &&
      email.current.value.trim() !== "" &&
      phone.current.value.trim() !== "" &&
      description.current.value.trim() !== ""
    ) {
      await addDoc(collection(db, "contactForm"), {
        values,
      });
    }

    firstname.current.value = "";
    lastname.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    description.current.value = "";
  };

  return (
    <>
      <div className="form_div">
        <form action="" onSubmit={handleSubmit}>
          <div className="control_main">
            <div className="form_control">
              <label htmlFor="firstname">First Name*:</label>
              <input
                ref={firstname}
                type="text"
                name="firstname"
                id="firstname"
                required
                onChange={(e) => {
                  handleChanges(e);
                }}
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
                onChange={(e) => {
                  handleChanges(e);
                }}
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
                onChange={(e) => {
                  handleChanges(e);
                }}
              />
            </div>
            <div className="form_control">
              <label htmlFor="phone">Phone Number*:</label>
              <input
                ref={phone}
                type="tel"
                name="phone"
                id="phone"
                required
                onChange={(e) => {
                  handleChanges(e);
                }}
              />
            </div>
          </div>
          <div>
            <div className="form_control">
              <label htmlFor="selectItem">Which area can we be of help?</label>
              <select
                name="selectItem"
                id="selectItem"
                onChange={(e) => {
                  handleChanges(e);
                }}
              >
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
                onChange={(e) => {
                  handleChanges(e);
                }}
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
