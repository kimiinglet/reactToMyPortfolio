import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "../src/components/project"

import Header from "./components/Header"
import Home from './components/Home';


class App extends Component {
 state = { 
   pet: "SusantheCat",
   time: 1
  }
  
  render() { 
    return ( 
      <div>
        <Header />
        <Home />
        <Project />
        <Footer />
      </div>
     );
  }
}
 
export default App;