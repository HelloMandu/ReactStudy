import React, { Component } from 'react';
import logo from './logo.svg';
import ScrollBox from './ScrollBox';
import LifeCycleSample from './LifeCycleSample';
import IterationSample from './IterationSample';
import Counter from './Counter';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
      </header> */}
        {/* <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        {/* <LifeCycleSample/> */}
        {/* <IterationSample></IterationSample> */}
        <Counter/>
      </div>
    );
  };
}

export default App;
