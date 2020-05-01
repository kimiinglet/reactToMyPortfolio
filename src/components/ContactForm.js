import React from 'react';
import {Row, Col} from "react-bootstrap"

function ContactForm() {
    return (
    <div id="CFcontainer">
        <div id="CFBox">
        <div>
            <h3>Contact Me</h3>
        </div>
        <Row>
            <Col id="formStyle">
            <form id="form">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Your first name.."></input>
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Your last name.."></input>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit" email="kinglet91391@gmail.com"></input>
            </form>
            </Col>
        </Row>
        </div>
    </div>
    )
}

export default ContactForm