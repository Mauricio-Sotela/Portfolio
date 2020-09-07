import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Button(props) {
  const [bgColor, setbgColor] = useState(props.bgColor);
  const [textColor, settextColor] = useState(props.textColor);

  const over = () => {
    setbgColor(props.hoverColor);
    settextColor(props.textColor);
  };
  const leave = () => {
    setbgColor(props.bgColor);
    settextColor(props.textColor);
  };

  let button =
    props.target === "" ? (
      <Link
        to={props.to}
        className="custom-link"
        rel="noopener noreferrer"
      >
        <button
          className="custom-button"
          style={{ backgroundColor: bgColor, color: textColor }}
          onMouseOver={() => over()}
          onMouseLeave={() => leave()}
        >
          {props.title}
        </button>
      </Link>
    ) : (
      <a
        className="custom-link"
        target={props.target}
        rel="noopener noreferrer"
        href={props.to}
      >
        <button
          className="custom-button"
          style={{ backgroundColor: bgColor, color: textColor }}
          onMouseOver={() => over()}
          onMouseLeave={() => leave()}
        >
          {props.title}
        </button>
      </a>
    );

  return button;
}
