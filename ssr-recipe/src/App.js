import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div>
      <Menu></Menu>
      <hr/>
      <Route path="/red" component={RedPage}></Route>
      <Route path="/blue" component={BluePage}></Route>
      <Route path="/Users" component={UserPage}></Route>
    </div>
  );
}

export default App;
