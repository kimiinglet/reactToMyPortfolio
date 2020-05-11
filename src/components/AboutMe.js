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
                <p>Hi there! There is a reason you’re reading this and whatever it is; Welcome, I’m Kimi. I’m just like you, and until you read this, you won’t know-how. So let’s begin: I’m here to prove myself wrong and conquer things that I thought were impossible. I am a very eager and ambitious person who not only wants to learn new things, but learn them in a way that I’m able to help explain to others. When I set my mind to something, I can’t be stopped.</p>
                <p>My little family: My partner, my dog, and two cats, enough about them... I have a heart of gold and will do anything for anyone to put a smile on their face. I’m very facetious and will pun on everything I see; it’s a hidden talent that I only show off sometimes.</p>
                <p><a class="icon" href="https://www.linkedin.com/in/kimiinglet/" alt="linkedIn"><img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="linkedInIcon"/></a>
                <a class="icon" href="https://github.com/kimiinglet" alt="github"><img src="https://img.icons8.com/wired/64/000000/github.png" alt="githubIcon"/></a>
                <a class="icon" href="https://twitter.com/IngletKimi" alt="twitter"><img src="https://img.icons8.com/carbon-copy/100/000000/twitter.png" alt="twitterIcon"/></a>
                </p>
                <br />
                <div class="skills">Skills: HTML, CSS, Javascript, Node.js, React, MongoDB, UIKit, Tailwind</div>
                <div class="learning">Learning: Python and PHP</div>
                </div>
                </Col>
            </Row>
    </div>
    )
}

export default AboutMe