import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
export default (VideoPlayer) => {
  return (
    <Player
      autoPay
      playsInline
      poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
      src="https://cdn.videvo.net/videvo_files/video/free/2015-10/small_watermarked/Typing_dark_05_Videvo_preview.webm"
    />
  );
};
