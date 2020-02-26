// import React, { Component } from 'react'

// class ProjectCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return (
//       <div className="project-cards">
//         <img src=""/>
//         <h2>name</h2>
//         <a href=""><strong>Website</strong></a>
//         <a href=""><strong>Github</strong></a>

//       </div>
//     )
//   }
// }
 
// export default ProjectCard;


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