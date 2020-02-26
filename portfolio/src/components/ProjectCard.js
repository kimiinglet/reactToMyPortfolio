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
    <img src={props.img}/>
    <h2>{props.name}</h2>
    <a href={props.website}>{props.website}</a> |
    <a href={props.github}>{props.github}</a>
  </div>

  )
  
}

export default ProjectCard