

import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-cards">
    <img src={props.img}/>
    <h3>{props.name}</h3>
    <p>Website: <a href={props.website}>{props.website}</a></p>
    <p>GitHub: <a href={props.github}>{props.github}</a></p>
  </div>

  )
  
}

export default ProjectCard