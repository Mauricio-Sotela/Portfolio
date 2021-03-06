import React from "react";

import ComponentsContainer from "./ComponentsContainer";
import Video from "./Video";
import VideoPlayer from "./VideoPlayer";
import SimpleModal from "./SimpleModal";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
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
                  title="GitHub"
                  bgColor="rgba(0,0,0,.8)"
                  hoverColor="white"
                  textColor="red"
                  to="https://github.com/Mauricio-Sotela"
                  target="_blank"
                />
              }
            />
          }
          simpleModal={
            <SimpleModal
               video={<VideoPlayer />}
              icon={<PlayIcon className="icon" />}
            />
          }
        />
        <div className="home__video">
          <Video href="https://cdn.videvo.net/videvo_files/video/free/2015-10/small_watermarked/Typing_dark_05_Videvo_preview.webm" />
        </div>
      </div>
    </div>
  );
}
