import React from "react";
import Button from './Button'

function Description(props) {
  return (
    <div className="description">
      <h1>{props.title}</h1>
      <div></div>
      <p>{props.description}</p>
      <Button
            title="Mauricio GitHub"
            bgColor="white"
            hoverColor="black"
            textColor="red"
            to="https://github.com/Mauricio-Sotela"
          />
    
    </div>
  );
}

export default Description;
