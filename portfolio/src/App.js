import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "../src/components/footer"
import Time from "../src/components/Time"
import Header from "../src/components/header"

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 
      <Time />
      <Footer />
    </div>
  );
}

export default App;
