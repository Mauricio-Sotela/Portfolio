import React from "react";

function Description(props) {
  let content;
  if (props.button) {
    content = (
      <div className="description">
        <h1>{props.title}</h1>
        <div className="line"></div>
        <p>{props.description}</p>
        {props.button}
      </div>
    );
  } else {
    content = (
      <div className="description">
        <h1>{props.title}</h1>
        <div className="line"></div>
        <p>{props.description}</p>
      </div>
    );
  }
  return content;
}

export default Description;
