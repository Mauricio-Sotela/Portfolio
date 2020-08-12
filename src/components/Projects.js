import React, { useState } from "react";
import Button from "./Button";

export default function Projects(props) {
  const { id, bg_img, category, description, url } = props.data;

  const [bg_image, set_bgImage] = useState(bg_img);
  const [display, setDisplay] = useState("none");
  const [bg_color, setBgColor] = useState("none");

  const mouseOver = () => {
    set_bgImage("none");
    setDisplay("flex");
    setBgColor(props.hoverColor);
  };
  const mouseLeave = () => {
    set_bgImage(bg_img);
    setDisplay("none");
    setBgColor("none");
  };

  return (
    <div key={id} className='project'>
      <div
        className="project_bg"
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundColor: `${bg_color}`,
        }}
        onMouseOver={() => mouseOver()}
        onMouseLeave={() => mouseLeave()}
      >
        <div className="project_hover" style={{ display: display }}>
          <h2>{category}</h2>
          <p>{description}</p>
          <Button
            title="Visit Website"
            bgColor="transparent"
            hoverColor="purple"
            textColor="white"
            to={url}
          />
        </div>
      </div>
    </div>
  );
}
