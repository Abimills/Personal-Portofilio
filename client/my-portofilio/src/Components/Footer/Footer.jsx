import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <h1>simplicity is the ultimate form of sophostication</h1>
      <div className="pages-container">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Experience</h3>
        <h3>Services</h3>
      </div>
      <div className="social-media-icons">
        <div className="facebook">
          <FaFacebookSquare />
        </div>
        <div className="instagram">
          <FaInstagramSquare />
        </div>
        <div className="linkedIn">
          <BsLinkedin />
        </div>
      </div>
      <p className="copy-right-footer"> @ Abel Portfolio. All rights reserved</p>
    </div>
  );
};

export default Footer;
