import React from "react";
import video from "./bgVideo.mp4";
function Video() {
  return (
    
      <video
        className="componentContainer__video"
        autoPlay
        muted
        loop
        src='https://vod-progressive.akamaized.net/exp=1598556050~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4924%2F17%2F449623701%2F1975833235.mp4~hmac=0d2f8a2d0ddc71858e61bb0dfd96a0eb94d24bcb42c7036154ba5e1ec3fb10d0/vimeo-prod-skyfire-std-us/01/4924/17/449623701/1975833235.mp4?filename=Line+-+46955.mp4'
        type="video/mp4"
      />
    
  );
}

export default Video;
