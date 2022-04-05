import React from "react";
import "./css/About.css";

function About({ theme }) {
  return (
    <div className="about" id="about">
      <span className="top para">
        I am a passionate UI Engineer who bridges the gap between development
        and design.{" "}
      </span>
      <span className="bottom para">
        I take responsibility to craft a good user experience using modern
        frontend architecture.
      </span>
    </div>
  );
}

export default About;
