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
                <p>Hi, Welcome, I’m Kimi. I am a very ambitious and passionate person who loves to build a full stack application as well as playing around with front-end work.  I have a heart of gold and will do anything for anyone to put a smile on their face. I’m very facetious and will pun on everything I see; it’s a hidden talent that I only show off sometimes.</p>
                <a class="icon" href="https://www.linkedin.com/in/kimiinglet/" alt="linkedIn"><img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="linkedInIcon"/></a>
                <a class="icon" href="https://github.com/kimiinglet" alt="github"><img src="https://img.icons8.com/wired/64/000000/github.png" alt="githubIcon"/></a>
                <a class="icon" href="https://twitter.com/IngletKimi" alt="twitter"><img src="https://img.icons8.com/carbon-copy/100/000000/twitter.png" alt="twitterIcon"/></a>
                <br />
                <div class="skills">Skills: HTML, Javascript, React, JQuery, AJAX, APIs, Node.js, MongoDB, Express, MySQL</div>
                <div class="skills">Front-end: CSS, UIKit, Tailwind</div>
                <div class="skills">Learning: AWS</div>
                </div>
                </Col>
            </Row>
    </div>
    )
}

export default AboutMe