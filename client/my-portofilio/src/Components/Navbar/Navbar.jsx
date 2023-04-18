import React from "react";
import "./navbar.css";
import leaf from "../HomeLandingPage/white-frame-green-leaf.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeBar, setActiveBar] = useState("home");
  return (
    <main className="navbar-main-section">
      <nav className="navigation-container">
        <div className="logo-name">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60807dd06ef2ab0bfb72765e/1622308613732-G067EXJQEWW1XZBTHQBH/BlueWolfLogo-21-JS+transparent+v2.-06.png"
            alt=""
            className="leaf-logo"
          />
          <span className="abel-logo-extend">Ab.</span>
        </div>
        <div className="nav-pages-container">
          <div className="home-page">
            <p className="home-page-navigation-p"></p>
          </div>
          <Link to={"/home"}>
            <div
              className={`${activeBar === "home" ? "active-nav" : "about-nav"}`}
              onClick={() => setActiveBar("home")}
            >
              home
            </div>
          </Link>
          <Link to={"/about"}>
            <div
              className={`${
                activeBar === "about" ? "active-nav" : "about-nav"
              }`}
              onClick={() => setActiveBar("about")}
            >
              about
            </div>
          </Link>
          <Link to={"/work"}>
            <div
              className={`${activeBar === "work" ? "active-nav" : "work-nav"}`}
              onClick={() => setActiveBar("work")}
            >
              Work
            </div>
          </Link>
          <Link to={"/contact"}>
            <div
              className={`${
                activeBar === "contact" ? "active-nav" : "contact-nav"
              }`}
              onClick={() => setActiveBar("contact")}
            >
              Contact
            </div>
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
