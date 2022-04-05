import React from "react";
import illustration from "../Assets/project.svg";
import "./css/Home.css";

function Home({ theme }) {
  return (
    <div className="home">
      <div className="left">
        <div className="details">
          <div className="greet">Hello 👋🏻</div>
          <p className="intro">
            I am{" "}
            <span style={{ color: `${theme.accent}` }}>Himanshu Pandey</span>
          </p>
          <p className="desc">
            Computer Science Student and Front-end Developer
          </p>
          <div className="buttons">
            <button
              className="resume btn"
              style={{
                backgroundColor: `${theme.accent}`,
                color: "#FFF",
              }}
            >
              Resume
            </button>
            <button className="connect btn">Let's Talk</button>
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
