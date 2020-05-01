import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Home from './components/Home';
import AboutMe from "./components/AboutMe";
import Time from "./components/Time";
// import bgImg from "../src/images/bgImg.png";




class App extends Component {

  render() { 
    return ( 
      <div>
      {/* <div styles = {{ backgroundImage: `url(${bgImg})`}}> */}       
        <Header />
        <Time />
        <AboutMe />
        <Home />
        <Footer />
        
      </div>
     );
  }
}
 
export default App;