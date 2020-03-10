// imrc
import React, { Component } from 'react'
import ProjectCard from "../components/ProjectCard"
import {Row, Col} from "react-bootstrap"
//importing pictures from files:
import employeeTracker from "../images/employeeTracker-min.png"
import noteTaker from "../images/Note-taker.png"
import passwordGen from "../images/passwordGen.png"
import wanderdog from "../images/wanderdog-min.png"
import fitnessTracker from "../images/fitnessTracker.png"
import quiz from "../images/quiz.png"
import employeeD from "../images/employeeD.png"
import dayPlanner from "../images/dayPlanner.png"

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
                        text = "WanderDog blah blah"
                        />
                        </Col>
                        <Col>
                        {/* Employee Directory */}
                        <ProjectCard 
                        img = {employeeTracker}
                        name = "Weather Dashboard"
                        website ="https://react-to-employee-directory.herokuapp.com/"
                        github ="https://github.com/kimiinglet/reactEmployeeDirectory"
                        text = "EmployeeTracker blah blah"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/* Password Generator */}
                        <ProjectCard
                        img = {passwordGen}
                        name = "Password Generator"
                        website = "https://kimiinglet.github.io/pswd_gen/"
                        github = "https://github.com/kimiinglet/pswd_gen"
                        text = "An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data."
                        />
                        </Col>
                        <Col>
                        {/* Note Taker */}
                        <ProjectCard 
                        img = {noteTaker}
                        name ="Note Taker"
                        website ="https://note-taker-boom.herokuapp.com/"
                        github ="https://github.com/kimiinglet/note-taker.git"
                        text = "An application that can be used to write, save, and delete notes. I used an express backend and save and retrieve note data from a JSON file."
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
                        text = "I've created a coding quiz where you are timed to answer 5 questions, and able to save your highscore to local storage."
                        />
                        </Col>
                        <Col>
                        {/* Workout Tracker */}
                        <ProjectCard 
                        img = {fitnessTracker}
                        name = "Workout Tracker"
                        website = "https://fitnes-trackher.herokuapp.com/"
                        github = "https://github.com/kimiinglet/workout-tracker"
                        text = "This application you're able to view create and track daily workouts."
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/*employeeD */}
                        <ProjectCard
                        img = {employeeD} 
                        name = "Employee Directory"
                        website = "https://react-to-employee-directory.herokuapp.com/"
                        github = "https://github.com/kimiinglet/reactEmployeeDirectory"
                        text = "With React i have created an employee directory where you can add, delete, edit and sort all with the table directory."
                        />
                        </Col>
                        <Col>
                        {/* Employee Directory */}
                        <ProjectCard 
                        img = {employeeTracker}
                        name = "React Employee Directory"
                        website ="https://react-to-employee-directory.herokuapp.com/"
                        github ="https://github.com/kimiinglet/reactEmployeeDirectory"
                        text = "EmployeeTracker blah blah"
                        />
                        </Col>
                        </Row>
                        <Row className="projectRows">
                        <Col>
                        {/*employeeD */}
                        <ProjectCard
                        img = {employeeD} 
                        name = "Reverse Engineering"
                        website = "https://react-to-employee-directory.herokuapp.com/"
                        github = "https://github.com/kimiinglet/reactEmployeeDirectory"
                        text = "With React i have created an employee directory where you can add, delete, edit and sort all with the table directory."
                        />
                        </Col>
                        <Col>
                        {/* Employee Directory */}
                        <ProjectCard 
                        img = {dayPlanner}
                        name = "Day Planner"
                        website ="https://kimiinglet.github.io/todo_list/"
                        github ="https://github.com/kimiinglet/todo_list.git"
                        text = "Need to make plans? I've created a day planner from 0900-1700 that allows you to save events for each hour of the day."
                        />
                        </Col>
                        </Row>
                </div>
            
         );
    }
}
 
export default Home;

