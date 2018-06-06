import React, { Component } from 'react';
import './App.css';

class Controls extends Component {
  render() {
    return (
      <div className="ControlsSection">
        <section className="Buttons">
        <button>Easy</button>
        <button>Medium</button>
        <button>Difficult</button>
        </section>
      </div>
    );
  }
}

export default Controls;