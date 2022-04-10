import React, { useRef, useEffect } from "react";
import illustration from "../Assets/project.svg";
import Resume from "../Assets/Resume.pdf";
import "./css/Home.css";
import { gsap } from "gsap";

function Home({ theme }) {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="details">
          <div className="greet">Hello 👋🏻</div>
          <p className="intro">
            I am{" "}
            <span style={{ color: `${theme.accent}` }}>Himanshu Pandey</span>
          </p>
          <p className="desc" id="description">
            Computer Science Student and Front-end Developer
          </p>
          <div className="buttons" id="buttons">
            <a
              href={Resume}
              download
              className="resume btn"
              style={{
                backgroundColor: `${theme.accent}`,
                color: "#FFF",
              }}
            >
              Resume
            </a>
            <a
              href="mailto:schafermike960@gmail.com"
              className="connect btn"
              style={{
                color: "#000",
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={illustration} alt="" className="illustration" />
      </div>
    </div>
  );
}

export default Home;
