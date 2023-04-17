import React from "react";
import "../../Pages/Home/home.css";
const HomeAboutMe = () => {
  return (
    <div className="home-about-us-section">
      <div className="mini-about-section">
        <h1 className="my-about-name"> About Abel Tekle</h1>
        <span className="cursor"></span>
        <div className="about-me-pic-container">
          <div className="circle-contact-about-me">
            <p className="contact-me-circle">contact me</p>
          </div>
          <div className="about-image-container">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="me-pic-about"
            />
          </div>
          <div className="about-me-paragraph">
            <img
              src="https://img.freepik.com/free-photo/golden-white-marble-textured-background_53876-98348.jpg"
              alt=""
              className="marble-pic"
            />
            <p className="my-about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sequi, asperiores, quisquam totam repellendus, quibusdam magni ad
              animi autem saepe hic sint alias! Rerum, sequi ad numquam impedit
              explicabo accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
