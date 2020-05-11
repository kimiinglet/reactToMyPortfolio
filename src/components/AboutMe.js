import React from 'react';
import {Row, Col} from "react-bootstrap"
import kimiImage from '../images/020820-headshots-05838.jpg'

function AboutMe() {
    return (
        <div id="aboutME">
            
            <Row>
                <Col id="img-col">
                <img id="kimi" src={kimiImage} alt="me"/>
                </Col>
                <Col>
                <div id="about">
                <h2>About Me</h2>
                <p>Hi, Welcome, I’m Kimi. During this pandemic it has been hard for me to go out and network, so i'm going to try and do my best with letting you know who I am.</p>
                <p>I am a very ambitious and passionate person who loves to learn new things in a way I can teach and explain to others. I recently finished a Coding Bootcamp at University of Texas at Austin for Full-Stack Web Development. I enjoy a good full stack application as well as playing around with front-end work. I find joy in helping people and learning about people which was why I was an EMT in San Francisco prior to moving back to Texas.xw
                </p>
                <p>My little family: My partner, my dog, and two cats, enough about them... I have a heart of gold and will do anything for anyone to put a smile on their face. I’m very facetious and will pun on everything I see; it’s a hidden talent that I only show off sometimes.</p>
                <a class="icon" href="https://www.linkedin.com/in/kimiinglet/" alt="linkedIn"><img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="linkedInIcon"/></a>
                <a class="icon" href="https://github.com/kimiinglet" alt="github"><img src="https://img.icons8.com/wired/64/000000/github.png" alt="githubIcon"/></a>
                <a class="icon" href="https://twitter.com/IngletKimi" alt="twitter"><img src="https://img.icons8.com/carbon-copy/100/000000/twitter.png" alt="twitterIcon"/></a>
                <br />
                <div class="skills">Skills: HTML, CSS, Javascript, Node.js, React, MongoDB, UIKit, Tailwind.</div>
                <div class="learning">Learning: Python and PHP.</div>
                </div>
                </Col>
            </Row>
    </div>
    )
}

export default AboutMe