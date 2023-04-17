import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-us-page-container">
      <div className="my-logo-with-pic-contact-container">
        <h1 className="logo-contact-page">Abel</h1>

        <p className="contact-me-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          laudantium harum beatae provident quia corrupti.
        </p>

        <div className="my-social-media-contacts">
          <div className="linkedIn"></div>
          <div className="whatsup"></div>
          <div className="github"></div>
          <div className="twitter"></div>
        </div>
      </div>
      <div className="all-input-contact-container">
        <h1 className="get-in-touch">Get In Touch</h1>
        <p className="interested-para">IF you interested give a call</p>
        <form className="form-control">
          <div className="contact-name-user">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="email-container">
            <input type="text" placeholder="Email" />
          </div>
          <div className="phone-container">
            <input type="text" placeholder="Phone" />
          </div>
          <div className="text-area-container">
            <textarea type="text" placeholder="Write your comment here" />
          </div>
          <button className="send-contact-comments">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
