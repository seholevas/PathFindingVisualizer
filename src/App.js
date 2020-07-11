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
          <Route path="/PathFindingVisualizer/" exact component={PathFindingInstructionsPage}>
            {/* <InstructionsPage></InstructionsPage> */}
          </Route>
          <Route path="PathFindingVisualizer/Algorithms" component={AlgorithmInstructionsPage}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
          <Route path="PathFindingVisualizer/Items" component={ItemsInstructionsPage}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
          <Route path="/PathFindingVisualizer/Play" component={PathFindApp}>
            {/* <PathFindApp></PathFindApp> */}
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
