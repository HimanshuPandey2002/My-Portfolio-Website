import React from "react";

function SkillIcon({ name, source, theme }) {
  return (
    <div className="skill-icon">
      <img src={source} alt="" className="skill-icon-img" />
      <p className="skill-icon-label" style={{ color: `${theme.text}` }}>
        {name}
      </p>
    </div>
  );
}

export default SkillIcon;
