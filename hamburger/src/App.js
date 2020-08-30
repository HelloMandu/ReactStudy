import React, { useState } from 'react';
import Hamburger from './Hamburger'

function App() {
  const [onHamburger, setOnHamberger] = useState(false);
  const onToggle = ()=>{
    setOnHamberger(!onHamburger);
  }
  return (
    <div>
      <Hamburger onHamburger={onHamburger} onToggle={onToggle}></Hamburger>
    </div>
  );
}

export default App;
