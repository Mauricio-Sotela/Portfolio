import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../data.json";
function Slider() {
  let projects = Data.projects.map((project) => {
    return (
      <div key={project.id}>
        <img alt="" src={project.img} />
        <a href={project.url} target="blank">
          {" "}
          <p className="legend">
            Visit the <span>{project.label}</span> project website
          </p>
        </a>
      </div>
    );
  });

  return (
    <Carousel autoPlay infiniteLoop>
      {projects}
    </Carousel>
  );
}

export default Slider;
