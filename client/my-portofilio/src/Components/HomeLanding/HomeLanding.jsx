import React from "react";
import "../../Pages/Home/home.css";
import myPic from "./guy-looking-down.png";
const HomeLanding = () => {
  return (
    <div className="main-home-page-container">
      <div className="introduction-title">
        <h1 className="my-name">H <span>ello</span></h1>
        <h1 className="i-am-ab"> I am Ab.</h1>
        <h1 className="my-job">
          a fullstack <span className="developer">developer</span>
        </h1>
        <div className="contact-me-div-btn">
          <button className="contact-me-home-btn">Contact me</button>
        </div>
      </div>

      <div className="my-pic">
        <img className="hero-my-pic" src={myPic} alt="" />
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

export default HomeLanding;
