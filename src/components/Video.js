import React from "react";
import video from "./bgVideo.mp4";
function Video() {
  return (
    
      <video
        className="componentContainer__video"
        autoPlay
        muted
        loop
        src={video}
        type="video/mp4"
      />
    
  );
}

export default Video;
