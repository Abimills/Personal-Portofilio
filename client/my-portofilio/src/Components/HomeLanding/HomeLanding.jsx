import React from "react";
import "../../Pages/Home/home.css";
import myPic from "./guy-looking-down.png";
const HomeLanding = () => {
  return (
    <div className="main-home-page-container">
      <div className="introduction-title">
        <h1 className="my-name">
          
          <span className="h">H</span>ello I am Ab<span className="ab">.</span>
        </h1>
        <h1 className="my-job">
           a fullstack <span className="developer">developer</span>
        </h1>
      </div>
      <div className="all-pic-text-container">

      <div className="my-pic">
        <div className="full-name">
          <p>Abel</p>
          <p className="last-name">Tek<span className="part-last-name">le</span></p>
            <div className="circle-orange"></div>
        </div>
        <img className="hero-my-pic" src={myPic} alt="" />
      </div>
      </div>
    </div>
  );
};

export default HomeLanding;
