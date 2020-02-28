// imrc
import React, { Component } from 'react'
import ProjectCard from "../components/ProjectCard"
import {Row, Col} from "react-bootstrap"
//importing pictures from files:
import employeeTracker from "../images/employeeTracker.png"
import noteTaker from "../images/noteTaker.png"
import passwordGen from "../images/passwordGen.png"
import wanderdog from "../images/wanderdog.png"
import fitnessTracker from "../images/fitnessTracker.png"
import dailySchedule from "../images/dailySchedule.png"

// ccc
class Home extends Component {
 
    render() { 
        return ( 
            <div style={{"margin": "100px"}}>
                    <Row className="projectRows">
                        <Col>
                        {/*WanderDog */}
                        <ProjectCard
                        img = {wanderdog}
                        name = "WanderDog"
                        website = "https://kimiinglet.github.io/meanLeanFreakGoat/"
                        github = "https://github.com/kimiinglet/meanLeanFreakGoat"
                        />
                        </Col>
                        <Col>
                        {/* Password Generator */}
                        <ProjectCard 
                        img = {passwordGen}
                        name = "Password Generator"
                        website = "https://kimiinglet.github.io/pswd_gen"
                        github = "https://github.com/kimiinglet/pswd-gen.github.io"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Workout Tracker */}
                        <ProjectCard 
                        img = {fitnessTracker}
                        name = "Workout Tracker"
                        website = "https://fitnes-trackher.herokuapp.com/"
                        github = "https://github.com/kimiinglet/workout-tracker"
                        />
                        </Col>
                        <Col>
                        {/* Employee Directory */}
                        <ProjectCard 
                        img = {employeeTracker}
                        name = "React Employee Directory"
                        website ="https://react-to-employee-directory.herokuapp.com/"
                        github ="https://github.com/kimiinglet/reactEmployeeDirectory"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Note Taker */}
                        <ProjectCard 
                        img = {noteTaker}
                        name ="Note Taker"
                        website ="https://note-taker-boom.herokuapp.com/"
                        github ="https://github.com/kimiinglet/note-taker.git"
                        />
                        </Col>
                        <Col>
                        {/* Todo */}
                        <ProjectCard 
                        img = "https://via.placeholder.com/150"
                        name ="ToDo"
                        website = "https://kimiinglet.github.io./todo_list/"
                        github = "https://github.com/kimiinglet/todo_list"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                            <Col>
                        {/* Quiz */}
                        <ProjectCard 
                        img = "https://via.placeholder.com/150"
                        name ="Quiz"
                        website ="https://kimiinglet.github.io/Quiz_time/."
                        github ="https://github.com/kimiinglet/Quiz_time.git"
                        />
                        </Col>
                        <Col>
                        <ProjectCard
                        img = {dailySchedule}
                        name ="Schedule"
                        website ="https://kimiinglet.github.io/Quiz_time/."
                        github ="https://github.com/kimiinglet/Quiz_time.git"
                        />

                        </Col>
                        </Row>

                </div>
            
         );
    }
}
 
export default Home;

