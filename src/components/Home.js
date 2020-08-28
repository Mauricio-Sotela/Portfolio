import React from "react";

import ComponentsContainer from "./ComponentsContainer";
import Video from "./Video";
import VideoPlayer from "./VideoPlayer";
import SimpleModal from "./SimpleModal";

import Description from "./Description";
import Button from "./Button";

export default function Home(props) {
  return (
    <div>
      <div className="home__container">
        <ComponentsContainer
          title="JOSE MAURICIO SOTELA PRENDERGAST"
          description={
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
          }
          simpleModal={<SimpleModal video={<VideoPlayer />} />}
        />
        <div className="home__video">
          <Video href="https://assets.mixkit.co/videos/preview/mixkit-young-engineers-working-on-server-room-23161-large.mp4" />
        </div>
      </div>
    </div>
  );
}
