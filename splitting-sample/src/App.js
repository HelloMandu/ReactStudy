import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () =>{
    setVisible(!visible);
  }
  const onMouseOver = () =>{
    SplitMe.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe></SplitMe>}
        </Suspense>
      </header>
    </div>
  );
}
export default App;
