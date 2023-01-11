import React from "react";

function Links(props){

  const {github, linkedin}= props
  
  return (
     <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
     </div>

  )
}

function About(props) {
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" ? <p>{props.bio}</p>: null}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskVSdiLfFbCLHOzJCIMOM7K2cGIGN8lbTeg&usqp=CAU" alt="I made this" />
      <Links github= {props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
