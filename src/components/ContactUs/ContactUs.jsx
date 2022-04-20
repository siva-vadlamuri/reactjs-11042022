import React from "react";

const ContactUs = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="firstName" id="" />
        <input onChange={handleChange} type="text" name="lastName" id="" />
        <input onChange={handleChange} type="email" name="email" id="" />
        <input onChange={handleChange} type="tel" name="phone" id="" />
        <button type="submit" className="btn btn-info">
          Contact Us
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
