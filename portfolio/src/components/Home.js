// imrc
import React, { Component } from 'react'
import Time from "../components/Time"
// ccc
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{"margin": "100px"}}>
                    <Time />
            </div>
         );
    }
}
 
export default Home;