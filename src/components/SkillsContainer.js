import React from "react";

function SkillsContainer(props) {
  // map simulation
  let data = props.skills;

  let skills = data.map((skill) => {
    return (
      <div className="icon__box" key={skill.id}>
       
        <i className={skill.icon}></i>
      </div>
    );
  });

  return <div className="skills__icons">{skills}</div>;
}

export default SkillsContainer;
