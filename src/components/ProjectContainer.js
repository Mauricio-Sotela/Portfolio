import React from "react";
import Projects from "./Projects";

export default function ProjectContainer(props) {
  const projects = props.data.projects.map((project) => {
    return (
      <React.Fragment>
        <Projects key={project.id} data={project} hoverColor="rgb(23, 44, 78" />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="projects_container">{projects}</div>
    </React.Fragment>
  );
}
