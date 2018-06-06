import React, { Component } from 'react';
import Controls from '../Components/Controls.js';
import MainGame from '../Components/MainGame.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Matching Game</h1>
        </header>
        <Controls />
        <MainGame />
        <h3>This is where the game will be rendered.</h3>
      </div>
    );
  }
}

export default App;
