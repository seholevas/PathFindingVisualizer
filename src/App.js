import React from 'react';


import "./css/app.css";
import PathFindApp from './react/pages/pathfind-page';
import PathFindingInstructionsPage from './react/pages/path-finding-instructions-page';
import AlgorithmInstructionsPage from "./react/pages/algorithms-instruction-page"
import ItemsInstructionsPage from "./react/pages/items-instruction-page"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={PathFindingInstructionsPage}>
            {/* <InstructionsPage></InstructionsPage> */}
          </Route>
          <Route path="/Algorithms" component={AlgorithmInstructionsPage}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
          <Route path="/Items" component={ItemsInstructionsPage}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
          <Route path="/Play" component={PathFindApp}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
