// imrc
import React, { Component } from 'react'
import Time from "../components/Time"
import ProjectCard from "../components/ProjectCard"
// ccc
class Home extends Component {
 
    render() { 
        return ( 
            <div style={{"margin": "100px"}}>
                    <Time />
                    <div className="projects">
                        {/*WanderDog */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="WanderDog"
                            website="https://kimiinglet.github.io/meanLeanFreakGoat/"
                            github="https://github.com/kimiinglet/meanLeanFreakGoat"
                        />
                        {/* Password Generator */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Password Generator"     
                            website="https://kimiinglet.github.io/pswd_gen"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/pswd-gen.github.io"
                        />
                        {/* Workout Tracker */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Workout Tracker"     
                            website="https://fitnes-trackher.herokuapp.com/"                                    website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/workout-tracker"
                        />

                        {/* Employee Directory */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="React Employee Directory"     
                            website="https://react-to-employee-directory.herokuapp.com/"                                  website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/reactEmployeeDirectory"
                        />
                        {/* Note Taker */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Note Taker"     
                            website="https://note-taker-boom.herokuapp.com/"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/note-taker.git"
                        />
                        {/* Todo */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="ToDo"     
                            website="https://kimiinglet.github.io./todo_list/"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/todo_list"
                        />
                    </div>
            </div>
         );
    }
}
 
export default Home;

