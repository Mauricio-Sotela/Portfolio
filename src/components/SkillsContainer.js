import React from "react";

function SkillsContainer(props) {
  // map simulation
  let data = props.skills;

  let skills = data.map((skill) => {
    return (
      <div className="icon__box" key={skill.id}>
        {/* font aweson icon */}
        {skill.icon && <i className={skill.icon}></i>}

        {/* in case not icon in font awesome found */}
        {skill.img && (
          <span
            className="iconify"
            data-icon={skill.img}
            data-inline="false"
          ></span>
        )}

        {/* in case not icon found use img*/}
        {skill.unknown && (
          <img
            align="center"
            alt="express"
            width="80%"
            src={skill.external__url}
          />
        )}
      </div>
    );
  });

  return <div className="skills__icons">{skills}</div>;
}

export default SkillsContainer;
