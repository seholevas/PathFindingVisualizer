import React from 'react';
import Grid from './react/modules/grid';
import Controls from './react/modules/controls';
import "./css/app.css";
import "./css/card.css"

function App() {
  return (
    <div className="app">
      <div className="card">
        <Grid></Grid>
        <Controls></Controls>
      </div>
    </div>
  );
}

export default App;
