import React from "react";
import "../../Pages/Home/home.css";
import { useState } from "react";
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
          Vanilla Javascript
        </h3>
      </div>
      <div className="projects-container">
        <div className="individual-project">
          <img
            src="https://www.springboard.com/blog/wp-content/uploads/2022/04/single-landing-page.png"
            alt=""
          />
        </div>
        <div className="individual-project">
          <img
            src="https://assets.toptal.io/images?url=https://uploads.toptal.io/blog/image/127645/toptal-blog-image-1543902453229-ad916e6d335f9bf787902f0660604567.jpg"
            alt=""
          />
        </div>
        <div className="individual-project">
          <img
            src="https://cdn.dribbble.com/users/6234/screenshots/14218430/media/10bdd017c24aca5d28f8d90fb20fd00c.png?compress=1&resize=400x300"
            alt=""
          />
        </div>
        <div className="individual-project">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBi484sztGHzeIu-rZUeV4ZSQUVpSvGEuTQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
