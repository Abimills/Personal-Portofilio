import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <main className="navbar-main-section">
      <nav className="navigation-container">
        <div className="logo-name">Abel T.</div>
        <div className="circle-name"><p>A</p></div>
        <div className="nav-pages-container">
          <div className="home-page">Home</div>
          <div className="about-page">About</div>
          <div className="work-page">Work</div>
          <div className="contact-page">Contact</div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
