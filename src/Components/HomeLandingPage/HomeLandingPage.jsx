import React from "react";
import "../../Pages/Home/home.css";
import homeAbel from "./new-abel.png";
const HomeLandingPage = () => {
  return (
    <div className="main-home-page-container">
      <div className="introduction-title">
        <h1 className="my-name">
          H <span>ello I am Abel</span>
        </h1>

        <h1 className="my-job">
          a fullstack web <span className="developer">developer</span>
        </h1>
        <p className="enjoy-work">
          {
            "< Enjoy what you do and you will never work for the rest of your life. />"
          }
        </p>
        <div className="contact-me-div-btn">
          <button className="send-contact-comments">Contact me</button>
        </div>
      </div>

      <div className="my-pic">
        <img className="hero-my-pic" src={homeAbel} alt="" />
        <div className="full-name">
          <p>Abel</p>
          <p className="last-name">
            Tek<span className="part-last-name">le</span>
          </p>
          <div className="circle-orange"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingPage;
