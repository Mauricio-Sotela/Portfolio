import React from "react";
import ComponentsContainer from "./ComponentsContainer";
import Description from "./Description";


export default function Skill(props) {
  return (
    <div className="skills__container">
      <ComponentsContainer
        skills={true}
        title="SKILLS"
        description={
          <Description
            title="Front-end / Back-end"
            description="I develop web sites using a combination of graphic design skills and technical computer skills that will allow me to create particular web pages. In addition to looking nice, I use different technologies to make the web sites functional and secure, always according with the requirements of employers or clients."
         
          />
        }
      />
    </div>
  );
}
