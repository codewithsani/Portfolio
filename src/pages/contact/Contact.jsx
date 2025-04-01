import React, { useState } from "react";
import {
  RiMap2Line,
  RiUser3Line,
  RiMailLine,
  RiBook2Line,
  RiSendPlaneLine,
} from "react-icons/ri";

import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setMessageColor("color-red");
      setFeedbackMessage("Write all the input fields");

      setTimeout(() => setFeedbackMessage(""), 3000);
      return;
    }

    const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_PUBLIC_KEY)
      .then(
        () => {
          setMessageColor("color-first");
          setFeedbackMessage("Message sent ✔");

          setTimeout(() => setFeedbackMessage(""), 5000);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>{" "}
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>

            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">
                Braunschweig,Niedersachsen, Deutschland
              </p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>

            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Available Right Now</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>

            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">saied.sani.biderooni@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>

            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+49 176 685 92131</p>
            </div>
          </div>
        </div>

        <form action="" className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-label">
                Your full Name <b>*</b>
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-name"
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label htmlFor="subject" className="contact-form-label">
              Your Subject <b>*</b>
            </label>

            <input
              type="text"
              name="subject"
              id="subject"
              onChange={handleChange}
              value={formData.subject}
              className="contact-form-input"
            />
          </div>

          <div className="contact-form-div">
            <label htmlFor="message" className="contact-form-label">
              Your Message <b>*</b>
            </label>

            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              className="contact-form-input contact-form-area"
            ></textarea>
          </div>

          <div className="contact-button">
            <button className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>
          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
