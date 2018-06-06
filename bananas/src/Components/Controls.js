import React, { Component } from 'react';

class Controls extends Component {
  constructor(){
    super()
    this.state = {
      reset: false,
      isToggleOnEasy: true,
      isToggleOnMedium: true,
      isToggleOnDifficult: true
    }
  }
  

  activateEasyDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: true,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
    })
  }
  activateMediumDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: true,
      isToggleOnDifficult: false,
    })
  }
  activateDifficultLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: true,
    })
  }
  Reset() {
    console.log("Reset");
    this.setState({
      isResetOn: true,
      isToggleOnEasy: true,
      isToggleOnMedium: true,
      isToggleOnDifficult: true,
    })
  }
 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (

    //this needs to be a long if-else. if false, don't show it. if true, show the corresponding button and the reset.
    this.state.isToggleOnEasy ? (
     <div>
        <button onClick={(e) => this.activateEasyDifficultyLevel(e)}>Easy</button>
        <button onClick={(e) => this.activateMediumDifficultyLevel(e)}>Medium</button>
        <button onClick={(e) => this.activateDifficultLevel(e)}>Difficult</button>
    </div>) 
    : (<button className="isResetOn" onClick={(e) => this.Reset(e)}>Start Over</button>)
    );
  }
}

export default Controls;