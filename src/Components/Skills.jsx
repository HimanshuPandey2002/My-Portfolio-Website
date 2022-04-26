import React from "react";
import patternL from "../Assets/pattern-l.svg";
import patternR from "../Assets/pattern-r.svg";
import "./css/Skills.css";
import SkillSec from "./SkillSec";

function Skills({ theme }) {
  return (
    <div className="skills" id="skills">
      <img src={patternR} alt="" className="pattern-right" />
      <img src={patternL} alt="" className="pattern-left" />
      <div
        className="skills-head"
        id="skills-head"
        style={{ color: `${theme.accent}` }}
      >
        My Skills
      </div>
      <div className="skills-subhead" id="skills-subhead">
        I like to take responsibility to craft aesthetic user experience using
        modern frontend architecture.
      </div>
      <SkillSec theme={theme} heading={"Web Development"} tag={"dev"} />
      <SkillSec
        theme={theme}
        heading={"Programming languages and Concepts"}
        tag={"prg"}
      />
      <SkillSec theme={theme} heading={"Tools I use"} tag={"tools"} />
      <SkillSec theme={theme} heading={"Currently Learning"} tag={"lrn"} />
    </div>
  );
}

export default Skills;
