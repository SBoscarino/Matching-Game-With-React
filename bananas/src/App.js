import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Matching Game</h1>
        </header>
        <Controls />
        <h3>This is where the game will be rendered.</h3>
      </div>
    );
  }
}

export default App;
