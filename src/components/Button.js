import React, { useState } from "react";

export default function Button(props) {
  const [bgColor, setbgColor] = useState(props.bgColor);
  const [textColor, settextColor] = useState(props.textColor);



  const over = () => {
    setbgColor(props.hoverColor);
    settextColor(props.bgColor);
  };
  const leave = () => {
    setbgColor(props.bgColor);
    settextColor(props.textColor);
  };
  return (
    <a
      className="custom-link"
      target="_blank"
      rel="noopener noreferrer"
      href={props.to}
    >
      <button
        className="custom-button"
        style={{ backgroundColor: bgColor, color: textColor }}
        onMouseOver={() => over()}
        onMouseLeave={() => leave()}
      >
        Hello, {props.title}
      </button>
    </a>
  );
}
