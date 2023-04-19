import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="circle-text-container">
        <div className="logo-name">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60807dd06ef2ab0bfb72765e/1622308613732-G067EXJQEWW1XZBTHQBH/BlueWolfLogo-21-JS+transparent+v2.-06.png"
            alt=""
            className="leaf-logo"
          />
          <span className="abel-logo-extend">Ab.</span>
        </div>
      </div>
      <div className="pages-container">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Experience</h3>
        <h3>Services</h3>
      </div>
      <div className="social-media-icons">
        <div className="icons-media facebook">
          <FaFacebookSquare />
        </div>
        <div className="icons-media instagram">
          <FaInstagramSquare />
        </div>
        <div className="icons-media linkedIn">
          <BsLinkedin />
        </div>
      </div>
      <p className="copy-right-footer">
        &copy; Abel Tekle Portfolio. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
