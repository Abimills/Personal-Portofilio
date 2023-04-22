import React from "react";
import "../Home/home.css";
const Contact = () => {
  return (
    <div className="contact-us-page-container">
      <div className="my-logo-with-pic-contact-container">
        <img
          src="https://media.istockphoto.com/id/1082313882/photo/beautiful-black-man.jpg?s=612x612&w=0&k=20&c=AZOgXuAMV-oanDiwxI2SofG_E5BUcOssxFFDRS2meRA="
          alt=""
          className="tempo-abel-pic"
        />
      </div>
      <div className="all-input-contact-container">
        <h1 className="get-in-touch">Get In Touch</h1>
        <p className="interested-para">Want to have a conversation? <br/> contact me here </p>
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
          <div className="send-btn-container">
            <button className="send-contact-comments">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
