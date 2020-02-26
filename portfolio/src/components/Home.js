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
                            name="Wander Dog"
                            website="https://kimiinglet.github.io/meanLeanFreakGoat/"
                            github="https://github.com/kimiinglet/todo_list"
                        />
                        {/* Password Generator */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Password Generator"     
                            website="https://kimiinglet.github.io/pswd_gen"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/todo_list"
                        />
                        {/* Employee Tracker */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Employee Tracker"     
                            website="https://kimiinglet.github.io/note-taker"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/todo_list"
                        />
                        {/* Note Taker */}
                        <ProjectCard 
                            img="https://via.placeholder.com/150"
                            name="Note Taker"     
                            website="https://kimiinglet.github.io/note-taker"                                       website="https://kimiinglet.github.io/todo_list/"
                            github="https://github.com/kimiinglet/todo_list"
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

