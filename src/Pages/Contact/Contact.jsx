import React, { useRef, useState } from "react";
import "../Home/home.css";
import standing from "./person.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);

  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await emailjs.send(
        "service_kyyicnb",
        "template_6d0qmyp",
        {
          to_name: "Abel",
          email: email ? email : "unmentioned email",
          from_name: firstName ? firstName : "unmentioned name",
          message: comment ? comment : "blank message",
          phone: phone ? phone : "unmentioned number",
        },
        "7l5q1JTdrVSmMpFJI"
      );
      setLoading(false);
      if (data) {
        // MySwal.fire({
        //   title: <p>Hello World</p>,
        //   didOpen: () => {
        //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //     MySwal.showLoading();
        //   },
        // })
        setComment("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        MySwal.fire(
          <p style={{ color: "aqua" }}>You have sent a Message to Abel T.</p>
        );
      } else {
        MySwal.fire(
          <p style={{ color: "aqua" }}>
            Something went wrong , please contact admin :
            abelbeyene373@gmail.com
          </p>
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
              required
              value={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="email-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="phone-container">
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="text-area-container">
            <textarea
              type="text"
              value={comment}
              placeholder="Write your comment here"
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="send-btn-container">
            <button className="send-contact-comments" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
