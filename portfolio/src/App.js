import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Home from './components/Home';
import AboutMe from "./components/AboutMe";




class App extends Component {

  render() { 
    return ( 
      <div>
        <Header />
        <AboutMe />
        <Home />
      
        <Footer />
      </div>
     );
  }
}
 
export default App;