import React from "react";
import "../../Pages/Home/home.css";
const Projects = () => {
  return (
    <div className="mother-projects-container">
      <h1 className="latest-projects">My latest Projects</h1>
      <div className="filter-div">
            <h3>Games</h3>
            <h3>Frontend</h3>
            <h3>Fullstack</h3>
            <h3>Vanilla Javascript</h3>
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
