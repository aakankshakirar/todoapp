import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const { firstName, lastName, phone } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Form</h1>
      <br /> <br />
      <form onSubmit={handleOnSubmit}>
        <div>
          <lable htmlFor="firstName">First Name</lable>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleOnChange}
          />
        </div>
        <br /> <br />
        <div>
          <lable htmlFor="lastName">Last Name</lable>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleOnChange}
          />
        </div>
        <br /> <br />
        <div>
          <lable htmlFor="">Phone Number</lable>
          <br />
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
