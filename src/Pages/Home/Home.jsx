import React from "react";
import "./home.css";
import HomeLanding from "../../Components/HomeLandingPage/HomeLandingPage";
import Projects from "../../Components/Projects/Projects";
import AboutPage from "../AboutPage/AboutPage";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="all-pages-home-container">
      <HomeLanding />
      <Projects />
      <AboutPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
