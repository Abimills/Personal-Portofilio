import React from "react";
import "../../Pages/Home/home.css";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import Footer from "../../Components/Footer/Footer";
import trip1 from "./trip1.png";
import trip3 from "./trip3.png";
import ecommerce1 from "./ecommerce1.png";
import facebook1 from "./facebook1.png";
import food2 from "./food2.png";
import resourant2 from "./resourant2.png";
import vacation1 from "./vacation1.png";
import clothes from "./clothes.png";
import cocktail from "./cocktail.png";
import quiz1 from "./quiz1.png";
import quiz2 from "./quiz2.png";
import quiz3 from "./quiz3.png";
import abres1 from "./abres1.png";
import abres2 from "./abres2.png";

const projectsData = [
  {
    name: "Vacation",
    imageSrc: vacation1,
    category: "frontend",
    demoLink: "https://tourismab.netlify.app",
    githubLink: "https://github.com/Abimills/tourism",
  },
  {
    name: "Restaurant",
    imageSrc: resourant2,
    category: "frontend",
    demoLink: "https://restaurantab.netlify.app",
    githubLink: "https://github.com/Abimills/restaurant/tree/main/restaurant",
  },
  {
    name: "Facewhere",
    imageSrc: facebook1,
    category: "fullstack",
    demoLink: "https://socialb-hyf-final-project.netlify.app/",
    githubLink:
      "https://github.com/Abimills/React-Project-Socialb/tree/main/socialmedia",
  },

  {
    name: "Ab Restaurant",
    imageSrc: abres2,
    category: "vanilla",
    demoLink: "https://abimills.github.io/api/public/",
    githubLink:
      "https://github.com/Abimills/Abel-API-Week-3-Individual-Project",
  },
  {
    name: "Ecommerce",
    imageSrc: ecommerce1,
    category: "frontend",
    demoLink: "https://abel-hyf-week3-homework-deployed.netlify.app",
    githubLink:
      "https://github.com/Abimills/React-class40/tree/abel-react-week3-homework/week3/project/ecommerce",
  },
  {
    name: "Travel Together",
    imageSrc: trip3,
    category: "fullstack",
    demoLink: "https://c40-team-monday.herokuapp.com/",
    githubLink:
      "https://github.com/Abimills/HackYourFuture-Final-Group-Fullstack-Project",
  },
  {
    name: "Clothes Ecommerce",
    imageSrc: clothes,
    category: "frontend",
    demoLink: "https://e-commereceapp.netlify.app",
    githubLink: "https://github.com/Abimills/cloth-ecommerce",
  },
  {
    name: "Quiz App",
    imageSrc: quiz1,
    category: "game",
    demoLink: "https://abimills.github.io/quiz/",
    githubLink: "https://github.com/Maher-Reven/browser-quiz-project-starter",
  },

  
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const handleClick = (value) => {
    setActiveCategory(value);
  };

  return (
    <>
      <div className="mother-projects-container">
        <p className="latest-projects">{" < My latest Projects />"}</p>
        <div className="filter-div">
          <h3
            onClick={() => handleClick("game")}
            className={`${
              activeCategory === "game" ? "active-cat" : "passive-cat"
            }`}
          >
            Games
          </h3>
          <h3
            onClick={() => handleClick("frontend")}
            className={`${
              activeCategory === "frontend" ? "active-cat" : "passive-cat"
            }`}
          >
            Frontend
          </h3>
          <h3
            onClick={() => handleClick("fullstack")}
            className={`${
              activeCategory === "fullstack" ? "active-cat" : "passive-cat"
            }`}
          >
            Fullstack
          </h3>
          <h3
            onClick={() => handleClick("vanilla")}
            className={`${
              activeCategory === "vanilla" ? "active-cat" : "passive-cat"
            }`}
          >
            Vanilla Js
          </h3>
        </div>
        <div className="projects-container">
          {projectsData
            .filter((pro) => pro.category === activeCategory)
            .map((project, index) => {
              const { name, imageSrc, demoLink, githubLink } = project;
              return (
                <div className="individual-project" key={index}>
                  <img src={imageSrc} alt={name} />
                  <h3 className="project-name">{name}</h3>
                  <div className="demo-github-container">
                    <a
                      href={demoLink}
                      className="demo-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      demo
                    </a>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                      <AiFillGithub className="github-project" />
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
