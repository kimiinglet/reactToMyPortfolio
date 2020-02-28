

import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-cards">
    <h3>{props.name}</h3>
    <img src={props.img} />
    <p>Website: <a href={props.website}>{props.website}</a></p>
    <p>GitHub: <a href={props.github}>{props.github}</a></p>
  </div>

  )
  
}

export default ProjectCard