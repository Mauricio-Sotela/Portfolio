import React from "react";
import Button from "./Button";
import Data from "../data.json";
import Skill from "./Skills";
import ProjectContainer from "./ProjectContainer";


export default function Home(props) {
   return (
        <div>
          <Button
            title="Mauricio GitHub"
            bgColor="white"
            hoverColor="black"
            textColor="black"
            to="https://github.com/Mauricio-Sotela"
          />
    
          <Button
            title="TEST DEPLOYED "
            bgColor="orange"
            hoverColor="green"
            textColor="white"
            to="https://mauricio-sotela.github.io/Portfolio/"
          />
    
          <Skill data={Data} />
    
          <ProjectContainer data={Data}  />
        </div>
      );
}
