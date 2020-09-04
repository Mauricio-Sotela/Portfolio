import React from "react";
import Data from "../data.json";
import FullProjects from "./FullProject";
import ComponentsContainer from "./ComponentsContainer";

export default function Projects(props) {
  const fullP = Data.fullProjects;
  let full = fullP.map((project) => {
    return <FullProjects project={project} />;
  });
  return (
    <div>
      <div className="slider__container container">
        <ComponentsContainer title="PROJECTS" slider="true" />
      </div>
      {full}
    </div>
  );
}
