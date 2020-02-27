import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"


class Header extends Component {
   
    state = {
        oldTime: this.props.time,

    }

    componentDidMount(){
        this.setState({
            ...this.state,
            newTime: 12
        })
    }

    render() {  
        
        return ( 
            <div id="nav">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="www.linkedin.com/in/kimiinglet">Kimi Inglet</Navbar.Brand>
                </Navbar>
            </div>
         );
    }
}
 
export default Header;