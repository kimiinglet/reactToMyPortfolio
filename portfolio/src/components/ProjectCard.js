

import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-cards">
    <img src={props.project.img}/>
    <h2>{props.project.name}</h2>
    <p>Website: <a href={props.project.website}>{props.project.website}</a></p>
    <p>GitHub: <a href={props.project.github}>{props.project.github}</a></p>
  </div>

  )
  
}

export default ProjectCard