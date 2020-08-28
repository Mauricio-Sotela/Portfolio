import React from "react";
import Description from "./Description";
import VideoPlayer from "./VideoPlayer";
import SimpleModal from "./SimpleModal";
import Button from "./Button";
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
            description="“A successful website does three things:
            It attracts the right kinds of visitors.
            Guides them to the main services or product you offer.
            Collect Contact details for future ongoing relation.”"
            button={
              <Button
                title="Mauricio GitHub"
                bgColor="white"
                hoverColor="black"
                textColor="red"
                to="https://github.com/Mauricio-Sotela"
              />
            }
          />
        </div>
        <div className="componentContainer__additional">
          <button>{<SimpleModal video={<VideoPlayer />} />}</button>
        </div>
      </div>
    </div>
  );
}

export default ComponentsContainer;
