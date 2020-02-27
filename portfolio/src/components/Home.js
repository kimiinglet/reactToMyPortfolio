// imrc
import React, { Component } from 'react'
import Time from "../components/Time"
import ProjectCard from "../components/ProjectCard"
import {Row, Col} from "react-bootstrap"

// ccc
class Home extends Component {
 
    render() { 
        return ( 
            <div style={{"margin": "100px"}}>
                    <Row className="projectRows">
                        <Col>
                        {/*WanderDog */}
                        <ProjectCard
                        project={{img: "https://via.placeholder.com/150", name: "WanderDog", website: "https://kimiinglet.github.io/meanLeanFreakGoat/", github:"https://github.com/kimiinglet/meanLeanFreakGoat" }}
                        />
                        </Col>
                        <Col>
                        {/* Password Generator */}
                        <ProjectCard 
                        project={{img:"https://via.placeholder.com/150", name:"Password Generator", website:"https://kimiinglet.github.io/pswd_gen", github:"https://github.com/kimiinglet/pswd-gen.github.io"}}
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Workout Tracker */}
                        <ProjectCard 
                        project={{img: "https://via.placeholder.com/150", name: "Workout Tracker", website: "https://fitnes-trackher.herokuapp.com/", github: "https://github.com/kimiinglet/workout-tracker"}}
                        />
                        </Col>
                        <Col>
                        {/* Employee Directory */}
                        <ProjectCard 
                            project={{img:"https://via.placeholder.com/150", name:"React Employee Directory", website:"https://react-to-employee-directory.herokuapp.com/", github:"https://github.com/kimiinglet/reactEmployeeDirectory"}}
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Note Taker */}
                        <ProjectCard 
                            project={{img:"https://via.placeholder.com/150", name:"Note Taker", website:"https://note-taker-boom.herokuapp.com/", github:"https://github.com/kimiinglet/note-taker.git"}}
                        />
                        </Col>
                        <Col>
                        {/* Todo */}
                        <ProjectCard 
                            project={{img:"https://via.placeholder.com/150", name:"ToDo", website:"https://kimiinglet.github.io./todo_list/",github:"https://github.com/kimiinglet/todo_list"}}
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                            <Col>
                        {/* Quiz */}
                        <ProjectCard 
                            project={{img:"https://via.placeholder.com/150", name:"Quiz", website:"https://kimiinglet.github.io/Quiz_time/.", github:"https://github.com/kimiinglet/Quiz_time.git"}}
                        />
                        </Col>
                        </Row>

                </div>
            
         );
    }
}
 
export default Home;

