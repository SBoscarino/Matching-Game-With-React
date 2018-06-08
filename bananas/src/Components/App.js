import React, { Component } from 'react';
import Controls from '../Components/Controls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Matching Game</h1>
        </header>
        <Controls />
      </div>
    );
  }
}

export default App;
