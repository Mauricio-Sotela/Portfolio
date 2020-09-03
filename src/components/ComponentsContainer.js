import React from "react";
import Avatar from "@material-ui/core/Avatar";
import SkillsContainer from "./SkillsContainer";
import Slider from "./Slider";

import Data from '../data.json'

function ComponentsContainer(props) {
  let content;
  if (props.simpleModal) {
    content = (
      <div className="componentContainer container">
        <div className="componentContainer__title">
          <h3>{props.title}</h3>
        </div>
        <div className="componentContainer__content">
          <div className="componentContainer__description">
            {props.description}
          </div>
          <div className="componentContainer__additional">
            <button>{props.simpleModal}</button>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="componentContainer container">
        <div className="componentContainer__title">
          <h3>{props.title}</h3>
        </div>
        <div className="componentContainer__content">
          <div className="componentContainer__description">
            {props.description}
          </div>
          <div className="componentContainer__additional">
            {props.img && <Avatar alt="IMG" src={props.img} />}
            {props.skills && <SkillsContainer skills={Data.skills} />}
            {props.slider && <Slider/>}
          
          </div>
        </div>
      </div>
    );
  }
  return content;
}

export default ComponentsContainer;
