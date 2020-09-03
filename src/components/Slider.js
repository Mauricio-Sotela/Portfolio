import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../data.json";
function Slider() {
  let projects = Data.projects.map((project) => {
    return (
      <a href={project.url}>
        <div>
          <img alt="" src={project.img} />
          <p className="legend">Legend 1</p>
        </div>
      </a>
    );
  });

  return (
    <Carousel autoPlay infiniteLoop>
      {projects}
    </Carousel>
  );
}

export default Slider;
