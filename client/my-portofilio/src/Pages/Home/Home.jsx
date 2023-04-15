import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HomeLanding from "../../Components/HomeLanding/HomeLanding";

const Home = () => {
  return (
    <div className="all-pages-home-container">
      <Navbar />
      <HomeLanding />
    </div>
  );
};

export default Home;
