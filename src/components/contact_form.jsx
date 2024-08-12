import React, { useState } from "react";

function ContactForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    selectItem: "",
    description: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="form_div">
        <form action="" onSubmit={handleSubmit}>
          <div className="control_main">
            <div className="form_control">
              <label htmlFor="firstname">First Name*:</label>
              <input
                type="text"
                name="firstname"
                required
                onChange={(e) => {
                  handleChanges(e);
                }}
              />
            </div>
            <div className="form_control">
              <label htmlFor="lastname">Last Name*:</label>
              <input
                type="text"
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
