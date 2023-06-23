import React from "react";
import "../../Pages/Home/home.css";
import homeAbel from "./abelino.png";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import PdfFile from "./resume.pdf";
import { FaFileDownload } from "react-icons/fa";

const HomeLandingPage = () => {
  const handleDownload = () => {
    saveAs(PdfFile, "downloaded_file.pdf");
  };

  const navigate = useNavigate();
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
          {"< Enjoy what you do and you will never work a day in your life. />"}
        </p>
        <div className="contact-me-div-btn">
          <button
            className="send-contact-comments"
            onClick={() => navigate("/contact")}
          >
            Contact me
          </button>
        </div>
      </div>

      <div className="my-pic">
        <img className="hero-my-pic" src={homeAbel} alt="" />
        <div className="full-name">
          <button onClick={handleDownload} className="download-cv">
            cv <FaFileDownload />{" "}
          </button>

          <div className="circle-orange"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingPage;
