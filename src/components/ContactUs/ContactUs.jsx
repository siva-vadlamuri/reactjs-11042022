import React from "react";

// converting a functional component into class component
class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneErr: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // validation
  // firstName >4
  // last >1
  // email '@' exist or not
  // phone it should be 10

  // formik

  validateForm = () => {
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let phoneErr = "";

    if (this.state.firstName.length < 4) {
      firstNameErr = "first name should be atleast 4 characters";
    }
    if (this.state.lastName.length < 1) {
      lastNameErr = "last name is required";
    }

    if (!this.state.email.includes("@")) {
      emailErr = "Please Enter a valid email address";
    }

    if (this.state.phone.length !== 10) {
      phoneErr = "Please enter a valid phone number";
    }
    // falsy values in javascript
    // undefined
    // 0
    // NaN
    // null
    // false
    // ''

    if (firstNameErr || lastNameErr || emailErr || phoneErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
      return false;
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      // send the data to server
      console.log(this.state);
    }
  };
  render() {
    return (
      <div className="mx-5 mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="mt-2">
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={this.state.firstName}
            />
            <p className="text-danger">{this.state.firstNameErr}</p>
          </div>
          <div className="mt-2">
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={this.state.lastName}
            />
            <p className="text-danger">{this.state.lastNameErr}</p>
          </div>
          <div className="mt-2">
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
            />
            <p className="text-danger">{this.state.emailErr}</p>
          </div>
          <div className="mt-2">
            <input
              onChange={this.handleChange}
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={this.state.phone}
            />
            <p className="text-danger">{this.state.phoneErr}</p>
          </div>
          <button type="submit" className="btn btn-info mt-2">
            Contact Us
          </button>
        </form>
      </div>
    );
  }
}
export default ContactUs;
