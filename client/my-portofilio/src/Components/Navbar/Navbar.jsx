import React from "react";
import "./navbar.css";
import leaf from "../HomeLanding/white-frame-green-leaf.jpg";

const Navbar = () => {
  return (
    <main className="navbar-main-section">
      <nav className="navigation-container">
        <div className="logo-name">
            <img src={leaf} alt="" className="leaf-logo" />
           </div>
        {/* <div className="circle-name"><p>A</p></div> */}
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
