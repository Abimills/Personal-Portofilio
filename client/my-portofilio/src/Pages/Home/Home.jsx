import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import HomeLanding from "../../Components/HomeLanding/HomeLanding";
import HomeAboutMe from "../../Components/HomeAboutMe/HomeAboutMe";
import Projects from "../../Components/Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="all-pages-home-container">
      <Navbar />
      <HomeLanding />
      <HomeAboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
