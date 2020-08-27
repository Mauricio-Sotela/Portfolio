import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
export default (VideoPlayer) => {
  return (
    <Player
    muted
      autoPay
      playsInline
      poster="https://bitmovin.com/wp-content/uploads/2016/06/sintel-poster.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};
