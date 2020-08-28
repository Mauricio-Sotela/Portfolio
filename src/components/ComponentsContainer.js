import React from "react";



function ComponentsContainer(props) {
  let content;
  if (props.simpleModal) {
    content = (
      <div className="componentContainer">
        <div className="componentContainer__title">
          <h3>{props.title}</h3>
        </div>
        <div className="componentContainer__content">
          <div className="componentContainer__description">
            {props.description}
          </div>
          <div className="componentContainer__additional">
            <button>{props.simpleModal }</button>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="componentContainer">
        <div className="componentContainer__title">
          <h3>{props.title}</h3>
        </div>
        <div className="componentContainer__content">
          <div className="componentContainer__description">
            {props.description}
          </div>
          <div className="componentContainer__additional"></div>
        </div>
      </div>
    );
  }
  return content;
}

export default ComponentsContainer;
