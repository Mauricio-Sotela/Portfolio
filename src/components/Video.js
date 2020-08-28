import React from "react";
import video from "./bgVideo.mp4";
function Video() {
  return (
    
      <video
        className="componentContainer__video"
        autoPlay
        muted
        loop
        src='https://assets.mixkit.co/videos/preview/mixkit-young-engineers-working-on-server-room-23161-large.mp4'
        type="video/mp4"
      />
    
  );
}

export default Video;
