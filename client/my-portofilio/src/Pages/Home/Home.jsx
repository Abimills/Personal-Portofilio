import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HomeLanding from "../../Components/HomeLanding/HomeLanding";
import HomeAboutMe from "../../Components/HomeAboutMe/HomeAboutMe";

const Home = () => {
  return (
    <div className="all-pages-home-container">
      <Navbar />
      <HomeLanding />
      <HomeAboutMe />
    </div>
  );
};

export default Home;
