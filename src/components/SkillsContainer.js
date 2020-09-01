import React from "react";

function SkillsContainer() {
  // map simulation
  let data=[{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
  
  let  skills=data.map((skill)=>{
      return(<div className="icon__box">  <i className="fab fa-sass"></i> </div>
      )
    })
     
    
 
  return(<div className="skills__icons">{skills}</div>)
  
}

export default SkillsContainer;
