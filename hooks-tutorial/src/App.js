import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Info'
import Average from './Average'
import Counter from './Counter';

{/*<div className="App">
      <header className="App-header">
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
      </header>
   </div> */}

function App() {
  return (
    <div>
      {/* <Average></Average> */}
      <Counter/>
    </div>
  );

}

export default App;
