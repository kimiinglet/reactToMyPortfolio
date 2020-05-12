import React from 'react';
import { Card } from "react-bootstrap"

function ProjectCard(props) {
  return (
    <div className="project-cards">
      <Card>
        <Card.Img id="imgCard" variant="top" src={props.img} />
        <Card.Body >
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