import React from "react";
import "../../Pages/Home/home.css";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const projectsData = [
  {
    name: "Ecommerce",
    imageSrc:
      "https://www.springboard.com/blog/wp-content/uploads/2022/04/single-landing-page.png",
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/ecommerce",
  },
  {
    name: "Project 2",
    imageSrc:
      "https://assets.toptal.io/images?url=https://uploads.toptal.io/blog/image/127645/toptal-blog-image-1543902453229-ad916e6d335f9bf787902f0660604567.jpg",
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/project2",
  },
  {
    name: "Project 3",
    imageSrc:
      "https://cdn.dribbble.com/users/6234/screenshots/14218430/media/10bdd017c24aca5d28f8d90fb20fd00c.png?compress=1&resize=400x300",
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/project3",
  },
  {
    name: "Project 4",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBi484sztGHzeIu-rZUeV4ZSQUVpSvGEuTQ&usqp=CAU",
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/project4",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("games");

  const handleClick = (value) => {
    setActiveCategory(value);
  };

  return (
    <div className="mother-projects-container">
      <h1 className="latest-projects">My latest Projects</h1>
      <div className="underline-project"></div>
      <div className="filter-div">
        <h3
          onClick={() => handleClick("games")}
          className={`${
            activeCategory === "games" ? "active-cat" : "passive-cat"
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
        {projectsData.map((project, index) => {
          const { name, imageSrc, demoLink, githubLink } = project;
          return (
            <div className="individual-project">
              <img src={imageSrc} alt={name} />
              <h3 className="project-name">{name}</h3>
              <div className="demo-github-container">
                <a href={demoLink} className="demo-link">demo</a>
                <a href={githubLink}>
                  <AiFillGithub className="github-project" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
