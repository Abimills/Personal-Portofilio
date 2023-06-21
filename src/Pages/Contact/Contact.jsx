import React, { useState } from "react";
import "../Home/home.css";
import standing from "./standing.png";
const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us-page-container">
      <div className="my-logo-with-pic-contact-container">
        <img src={standing} alt="" className="tempo-abel-pic" />
      </div>
      <div className="all-input-contact-container">
        <h1 className="get-in-touch">Get In Touch</h1>
        <p className="interested-para">
          Want to have a conversation? <br /> lets make it happen!{" "}
        </p>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="contact-name-user">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="email-container">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="phone-container">
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="text-area-container">
            <textarea
              type="text"
              placeholder="Write your comment here"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="send-btn-container">
            <button className="send-contact-comments" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
