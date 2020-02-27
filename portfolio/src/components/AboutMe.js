import React from 'react';
import {Row, Col} from "react-bootstrap"
import image from '../images/020820-headshots-05838.jpg'

function AboutMe() {
    return (
        <div id="aboutME">
            
            <Row>
                <Col id="img-col">
                <img id="kimi" src={image}/>
                </Col>
                <Col id="about">
                <h2>About Me</h2>
                <p>I am a very passionate and caring person. I am driven by success and the idea of a great and
                    promising future for not only myself but for my family as well.
                    blah blah blah, i'll add more later</p>  
                </Col>
            
            </Row>
            
 
    </div>
    )
}

export default AboutMe