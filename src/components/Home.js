import React from "react";

import ComponentsContainer from "./ComponentsContainer";
import Video from "./Video";
export default function Home(props) {
  return (
    <div>
      <div className="home__container">
        <ComponentsContainer title='TEST'/>
        <div className="home__video">
          <Video />
        </div>
      </div>
    </div>
  );
}
