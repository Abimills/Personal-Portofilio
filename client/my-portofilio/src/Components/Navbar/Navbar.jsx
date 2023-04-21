import React from "react";
import "./navbar.css";
import leaf from "../HomeLandingPage/white-frame-green-leaf.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [activeBar, setActiveBar] = useState("home");
  const [openBar, setOpenBar] = useState(true);
  const [isClose, setIsClose] = useState(false);
  const navigate = useNavigate();

  const handleBar = () => {
    setIsClose(!isClose);
    setOpenBar(!openBar);
  };
  const handleFalseBar = () => {
    setIsClose(false);
    setOpenBar(!openBar);
  };
  console.log(openBar);
  // useEffect(() => {
  //   window.scrollTo(0, 100);
  // });
  return (
    <main className="navbar-main-section">
      <nav className="navigation-container">
        <div className="logo-name">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60807dd06ef2ab0bfb72765e/1622308613732-G067EXJQEWW1XZBTHQBH/BlueWolfLogo-21-JS+transparent+v2.-06.png"
            alt=""
            className="leaf-logo"
          />
        </div>
        <div className="small-device-bar-container">
          <div className="close-open-bar">
            {openBar ? (
              <GiHamburgerMenu className="open-bar-nav" onClick={handleBar} />
            ) : (
              <IoCloseCircle className="close-bar-nav" onClick={handleBar} />
            )}
          </div>
        </div>
        <div
          onClick={handleFalseBar}
          className={
            isClose
              ? "nav-pages-container"
              : " nav-pages-container nav-pages-container-turn-off"
          }
        >
          <div className="home-page">
            <p className="home-page-navigation-p"></p>
          </div>
          <Link to={"/home"}>
            <div
              className={`nav-item ${
                activeBar === "home" ? " active-nav" : "  about-nav"
              }`}
              onClick={() => setActiveBar("home")}
            >
              <AiFillHome />
            </div>
          </Link>
          <Link to={"/about"}>
            <div
              className={`nav-item ${
                activeBar === "about" ? "   active-nav" : "  about-nav"
              }`}
              onClick={() => setActiveBar("about")}
            >
              <BsFillPersonFill />
            </div>
          </Link>
          <Link to={"/work"}>
            <div
              className={` nav-item ${
                activeBar === "work" ? "active-nav" : "  work-nav"
              }`}
              onClick={() => setActiveBar("work")}
            >
              <MdOutlineWork />
            </div>
          </Link>
          <Link to={"/contact"}>
            <div
              className={`nav-item ${
                activeBar === "contact" ? "active-nav" : " contact-nav"
              }`}
              onClick={() => setActiveBar("contact")}
            >
              <FaPhoneSquareAlt />
            </div>
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
