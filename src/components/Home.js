// imrc
import React, { Component } from 'react'
import ProjectCard from "../components/ProjectCard"
import {Row, Col} from "react-bootstrap"
//importing pictures from files:
import employeeTracker from "../images/employeeTracker-min.png"
import noteTaker from "../images/noteTaker-min.png"
import passwordGen from "../images/passwordGen-min.png"
import wanderdog from "../images/wanderdog-min.png"
import fitnessTracker from "../images/fitnessTracker-min.png"
import quiz from "../images/quiz.png"

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
                        {/* Note Taker */}
                        <ProjectCard 
                        img = {noteTaker}
                        name ="Note Taker"
                        website ="https://note-taker-boom.herokuapp.com/"
                        github ="https://github.com/kimiinglet/note-taker.git"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Quiz */}
                        <ProjectCard 
                        img = {quiz}
                        name ="Quiz"
                        website ="https://kimiinglet.github.io/Quiz_time/."
                        github ="https://github.com/kimiinglet/Quiz_time.git"
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


                </div>
            
         );
    }
}
 
export default Home;
