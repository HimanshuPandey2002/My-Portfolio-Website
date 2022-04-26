import React from "react";
import SkillIcon from "./SkillIcon";
import HTML from "../Assets/skills/html.svg";
import JavaScript from "../Assets/skills/Javascript.png";
import REACT from "../Assets/skills/react.svg";
import REDUX from "../Assets/skills/redux.svg";
import SASS from "../Assets/skills/sass.svg";
import ELECTRON from "../Assets/skills/electron.svg";
import GSAP from "../Assets/skills/gsap.svg";

import Java from "../Assets/skills/Java.png";
import CPP from "../Assets/skills/cpp.svg";
import OOPs from "../Assets/skills/oops.png";
import OS from "../Assets/skills/os.png";
import DSA from "../Assets/skills/dsa.png";

import GIT from "../Assets/skills/github.png";
import Code from "../Assets/skills/vscode.png";
import IJ from "../Assets/skills/intellij.png";
import Canva from "../Assets/skills/canva.png";
import Figma from "../Assets/skills/figma.svg";

import Docker from "../Assets/skills/docker.png";
import Etherium from "../Assets/skills/etherium.png";
import Solidity from "../Assets/skills/solidity.png";
import Web3 from "../Assets/skills/web3.png";
import Blockchain from "../Assets/skills/blockchain.webp";

function SkillSec({ heading, tag, theme }) {
  const displayIcons = () => {
    if (tag === "dev")
      return (
        <>
          <SkillIcon theme={theme} name="Html" source={HTML} />
          <SkillIcon theme={theme} name="JavaScript" source={JavaScript} />
          <SkillIcon theme={theme} name="React" source={REACT} />
          <SkillIcon theme={theme} name="Redux" source={REDUX} />
          <SkillIcon theme={theme} name="SASS" source={SASS} />
          <SkillIcon theme={theme} name="Electron" source={ELECTRON} />
          <SkillIcon theme={theme} name="GSAP" source={GSAP} />
        </>
      );

    if (tag === "prg")
      return (
        <>
          <SkillIcon theme={theme} name="Java" source={Java} />
          <SkillIcon theme={theme} name="C++" source={CPP} />
          <SkillIcon theme={theme} name="OOPs" source={OOPs} />
          <SkillIcon theme={theme} name="OS" source={OS} />
          <SkillIcon theme={theme} name="DSA" source={DSA} />
        </>
      );

    if (tag === "tools")
      return (
        <>
          <SkillIcon theme={theme} name="Github" source={GIT} />
          <SkillIcon theme={theme} name="VS Code" source={Code} />
          <SkillIcon theme={theme} name="Intelli j" source={IJ} />
          <SkillIcon theme={theme} name="Figma" source={Figma} />
          <SkillIcon theme={theme} name="Canva" source={Canva} />
        </>
      );

    if (tag === "lrn")
      return (
        <>
          <SkillIcon theme={theme} name="Docker" source={Docker} />
          <SkillIcon theme={theme} name="Etherium" source={Etherium} />
          <SkillIcon theme={theme} name="Solidity" source={Solidity} />
          <SkillIcon theme={theme} name="Web 3.0" source={Web3} />
          <SkillIcon theme={theme} name="Blockchain" source={Blockchain} />
        </>
      );
  };
  return (
    <div className="section">
      <div className="sec-head" id="sec-head">
        {heading}
      </div>
      <div className="skill-icons" id="skill-icons">
        {displayIcons()}
      </div>
    </div>
  );
}

export default SkillSec;
