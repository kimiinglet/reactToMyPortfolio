

import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-cards">
    <img src={props.project.img}/>
    <h3>{props.project.name}</h3>
    <p>Website: <a href={props.project.website}>{props.project.website}</a></p>
    <p>GitHub: <a href={props.project.github}>{props.project.github}</a></p>
  </div>

  )
  
}

export default ProjectCard