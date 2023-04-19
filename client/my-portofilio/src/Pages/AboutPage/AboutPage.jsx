import React from "react";
import "../../Pages/Home/home.css";
import { useEffect } from "react";
import { useState } from "react";
const AboutPage = () => {
  const [text, setText] = useState("");
  const aboutMeText = `Ab a junior fullstack web developer, I've had a thrilling
    experience working with code. From my early days learning HTML and
    CSS, to diving deeper into JavaScript and other programming
    languages, coding has become a passion of mine. I've worked on a
    variety of projects, ranging from small personal websites to
    complex web applications. Each project has provided me with new
    challenges, forcing me to think critically and creatively to find
    solutions. Although coding can be frustrating at times, the
    feeling of accomplishment when a project is complete and
    functioning properly is incredibly rewarding. As I continue to
    develop my skills and gain more experience, I'm excited to see
    where my career as a developer takes me.`;

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < aboutMeText.length) {
        setText((text) => text + aboutMeText.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="home-about-us-section">
      <div className="mini-about-section">
        <div className="name-about-me-container">
          <div>
            <h1 className="my-about-name"> About Me</h1>
            <span className="cursor"></span>
          </div>
        </div>
        <div className="about-me-pic-container">
          <div className="circle-contact-about-me">
            <p className="contact-me-circle">contact me</p>
          </div>
          <div className="about-image-container">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="me-pic-about"
            />
          </div>
          <div className="about-me-paragraph">
            <img
              src="https://t4.ftcdn.net/jpg/05/69/86/47/360_F_569864714_pJaPQL9bBdAqFYZmSVMpfr7o2vQx8cMa.jpg"
              alt=""
              className="marble-pic"
            />
            <p className="my-about-para">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



