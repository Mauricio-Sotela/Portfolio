import React from "react";
function Video(props) {
  return (
    
      <video
        className="componentContainer__video"
        autoPlay
        muted
        loop
        src={props.href}
        type="video/mp4"
      />
    
  );
}

export default Video;
