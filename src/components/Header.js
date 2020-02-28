import React, { Component } from 'react';
import { Navbar } from "react-bootstrap"


class Header extends Component {
   
    render() {  
        
        return ( 
            <div>
                <Navbar id="nav" expand="lg" className="justify-content-center">
                    <Navbar href="www.linkedin.com/in/kimiinglet">Kimi Inglet</Navbar>
                </Navbar>
            </div>
         );
    }
}
 
export default Header;