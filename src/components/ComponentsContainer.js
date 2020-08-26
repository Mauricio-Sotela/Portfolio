import React from "react";
import Description from "./Description";
import red from '@material-ui/core/colors/red';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';

function ComponentsContainer(props) {
  
  return (
    <div className="componentContainer">
      <div className="componentContainer__title">
        <h3>JOSE MAURICIO SOTELA PRENDERGAST</h3>
      </div>
      <div className="componentContainer__content">
        <div className="componentContainer__description">
          <Description
            title="FULL-STACK WEB DEVELOPER"
            description="You have the vision for a stunning digital experience. We’re
the software design and engineering team that can bring it to life."
          />
        </div>
        <div className="componentContainer__additional">
          <PlayIcon className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default ComponentsContainer;
