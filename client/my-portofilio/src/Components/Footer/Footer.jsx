import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          
      </div>
      <div className="pages-container">
        <Link to={"/home"}>
        <h3>Home</h3>
        </Link>
        <Link to={"/about"}>
        <h3>About</h3>
        </Link>
        <Link to={"/work"}>
        <h3>Experience</h3>
        </Link>
        <Link to={"/contact"}>
        <h3>Contact</h3>
        </Link>
       
      </div>
        </div>
      <div className="copy-right-icons-container">

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
    </div>
  );
};

export default Footer;
