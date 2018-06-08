import React, { Component } from 'react';

class Controls extends Component {
  constructor(){
    super()
    this.state = {
      reset: false,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: false
    }
  }
  

  activateEasyDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: true,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
    })
    console.log(this.state);
  }
  activateMediumDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: true,
      isToggleOnDifficult: false,
    })
    console.log(this.state);
  }
  activateDifficultLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: true,
    })
    console.log(this.state);
  }
  Reset() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
    })
    console.log(this.state);
  }
 

  render() {
  

    //this needs to be a long if-else. if false, don't show it. if true, show the corresponding button and the reset.
    if (this.state.isToggleOnEasy === false && this.state.isToggleOnMedium === false && this.state.isToggleOnDifficult === false) {
      return(
        <div className="mode">
          <h3>Choose a mode:</h3>
          <button onClick={(e) => this.activateEasyDifficultyLevel(e)}>Easy</button>
          <button onClick={(e) => this.activateMediumDifficultyLevel(e)}>Medium</button>
          <button onClick={(e) => this.activateDifficultLevel(e)}>Difficult</button>
        </div>
      )
    }
    if (this.state.isToggleOnEasy === true) {
      return(
        <div className="mode">
          <h3>Easy Difficulty Mode Active</h3>
          <button className="isResetOn" onClick={(e) => this.Reset(e)}>Start Over</button>
        </div>
      )
    }
    if (this.state.isToggleOnMedium === true) {
      return(
        <div className="mode">
          <h3>Medium Difficulty Mode Active</h3>
          <button className="isResetOn" onClick={(e) => this.Reset(e)}>Start Over</button>
        </div>
      )
    }
    if (this.state.isToggleOnDifficult === true) {
      return(
        <div className="mode">
          <h3>Most Difficult Difficulty Mode Active</h3>
          <button className="isResetOn" onClick={(e) => this.Reset(e)}>Start Over</button>
        </div>
      )
    }
    else {
      return(
        <div className="mode">
          <h3>Choose a mode:</h3>
          <button onClick={(e) => this.activateEasyDifficultyLevel(e)}>Easy</button>
          <button onClick={(e) => this.activateMediumDifficultyLevel(e)}>Medium</button>
          <button onClick={(e) => this.activateDifficultLevel(e)}>Difficult</button>
        </div>
      )
    }
  }
}

export default Controls;