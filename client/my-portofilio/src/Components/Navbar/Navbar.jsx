import React from "react";
import "./navbar.css";
import leaf from "../HomeLanding/white-frame-green-leaf.jpg";
import { useState } from "react";

const Navbar = () => {
  const [activeBar, setActiveBar] = useState("home");
  return (
    <main className="navbar-main-section">
      <nav className="navigation-container">
        <div className="logo-name">
          <img src={leaf} alt="" className="leaf-logo" />
        </div>
        {/* <div className="circle-name"><p>A</p></div> */}
        <div className="nav-pages-container">
          <div className="home-page">
            <h3
              className={`${activeBar === "home" ? "active-nav" : "home-nav"}`}
              onClick={() => setActiveBar("home")}
            >
              Home
            </h3>
            <p className="home-page-navigation-p"></p>
          </div>
          <div
            className={`${activeBar === "about" ? "active-nav" : "about-nav"}`}
            onClick={() => setActiveBar("about")}
          >
            About
          </div>
          <div
            className={`${activeBar === "work" ? "active-nav" : "work-nav"}`}
            onClick={() => setActiveBar("work")}
          >
            Work
          </div>
          <div
            className={`${
              activeBar === "contact" ? "active-nav" : "contact-nav"
            }`}
            onClick={() => setActiveBar("contact")}
          >
            Contact
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
