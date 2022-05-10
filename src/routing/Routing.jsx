import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../components/ContactUs/ContactUs";
import Users from "../components/Users/Users";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<h2>about Us</h2>} />
    </Routes>
  );
}

export default Routing;
