import React from "react";
import ComponentsContainer from "./ComponentsContainer";
import Description from "./Description";
import Button from "./Button";

function About() {
  return (
    <div className="about__container">
      <ComponentsContainer
        img="https://avatars3.githubusercontent.com/u/55654453?s=460&u=43d4e8f576aa12909e38997048676242ce9e251f&v=4"
        title="ABOUT ME"
        description={
          <Description
            title="FULL-STACK WEB DEVELOPER"
            description="Hello! my name is Mauricio Sotela Prendergast, I'm a Web Developer student in DCI Berlin, Germany.

            I have serious passion for Front-End and Back-End development, focus in learning new technologies and web tendencies."
            button={
              <Button
                title="Contact Me"
                bgColor="rgba(0,0,0,.8)"
                hoverColor="white"
                textColor="red"
                to="/contact"
                target=""
              />
            }
          />
        }
      />
    </div>
  );
}

export default About;
