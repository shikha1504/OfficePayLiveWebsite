import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../Css/Contact.css";
import axios from "axios";
import swal from "sweetalert";

function Contact() {
  const [contactField, setContactField] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleContactInput = (e) => {
    setContactField({
      ...contactField,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactDetails = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "https://goinvoicy.com/api/create-contact",
          contactField
        )
        .then((response) => {
          if (response) {
            swal(response.data.message);
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <section className="banner-image-contact">
        <div className="banner-image-content-contact">
          <h1> Contact Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleContactDetails}>
            <h2> Get In Touch</h2>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                value={contactField.name}
                placeholder="Full Name"
                onChange={handleContactInput}
              />
              <i class="fa-solid fa-user"></i>
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                value={contactField.email}
                onChange={handleContactInput}
                placeholder="Your Email"
              />
              <i class="fa-solid fa-envelope"></i>
            </div>

            <div className="input-wrapper">
              <input
                type="contact"
                name="contact"
                value={contactField.contact}
                onChange={handleContactInput}
                placeholder="Contact No."
              />
              <i class="fa-solid fa-phone"></i>
            </div>

            <textarea
              type="textarea"
              name="message"
              value={contactField.message}
              onChange={handleContactInput}
              placeholder="Message"
            />
            <button type="submit"> Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
