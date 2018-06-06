import React, { Component } from 'react';

class Controls extends Component {
  activateEasyDifficultyLevel() {
    console.log("Easy Level Active.");
  }
  activateMediumDifficultyLevel() {
    console.log("Medium Level Active.");
  }
  activateDifficultLevel() {
    console.log("Difficult Level Active.");
  }

  render() {
    return (
      <div className="ControlsSection">
        <section className="Buttons">
        <button onClick={(e) => this.activateEasyDifficultyLevel(e)}>Easy</button>
        <button onClick={(e) => this.activateMediumDifficultyLevel(e)}>Medium</button>
        <button onClick={(e) => this.activateDifficultLevel(e)}>Difficult</button>
        </section>
      </div>
    );
  }
}

export default Controls;