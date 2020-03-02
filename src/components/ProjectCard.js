

import React from 'react';
import { Card } from "react-bootstrap"

function ProjectCard(props) {
  return (
  //   <div className="project-cards">
  //   <h3>{props.name}</h3>
  //   <img src={props.img} />
  //   <p>Website: <a href={props.website}>{props.website}</a></p>
  //   <p>GitHub: <a href={props.github}>{props.github}</a></p>
  // </div>
<div className="project-cards">
    <Card style={{ 
      width: '18rem', 
      margin: '5px', 
      borderStyle: 'solid', 
      borderColor: 'gray',
      textAlign: 'center'
      
      }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
  <Card.Title>{props.name}</Card.Title>
  <Card.Text>{props.text}
  </Card.Text>
</Card.Body>
<Card.Body>
  <Card.Link href={props.website}>Website</Card.Link>
  <Card.Link href={props.github}>GitHub</Card.Link>
</Card.Body>
</Card>
</div>

  )
  
}

export default ProjectCard