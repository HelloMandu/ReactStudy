import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginComplete from "./page/LoginComplete";
import LoginPage from "./page/LoginPage";
import "./SCSS/index.scss";

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact/>
        <Route path="/login_complete" component={LoginComplete} />
      </Switch>
    </div>
  );
};

export default App;
