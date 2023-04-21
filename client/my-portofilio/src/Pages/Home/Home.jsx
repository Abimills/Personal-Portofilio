import React from "react";
import "./home.css";
import HomeLanding from "../../Components/HomeLandingPage/HomeLandingPage";

import Contact from "../Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import AboutPage from "../AboutPage/AboutPage";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    
    <div className="all-pages-home-container">
      <HomeLanding />

    </div>
    
  );
};

export default Home;
