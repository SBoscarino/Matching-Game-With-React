import React, { Component } from 'react';
import EasyGame from './EasyGame';

class Controls extends Component {
  constructor(){
    super()
    this.state = {
      reset: false,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
      selectedImages: [],    //when the user selects a game, images are collected here.
      cards: 0
    }
  }
  
//handle button clicks.
  activateEasyDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: true,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
      selectedImages: [],
      cards: 12
    })
    console.log(this.state);
  }
  activateMediumDifficultyLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: true,
      isToggleOnDifficult: false,
      selectedImages: [],
      cards: 18
    })
    console.log(this.state);
  }
  activateDifficultLevel() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: true,
      selectedImages: [],
      cards: 26
    })
    console.log(this.state);
  }
  Reset() {
    this.setState({
      isResetOn: true,
      isToggleOnEasy: false,
      isToggleOnMedium: false,
      isToggleOnDifficult: false,
      selectedImages: [],
      cards: 0
    })
    console.log(this.state);
  }

    //work on THIS next time!!
    //need to randomly select from the cardback images and send them off as props. 
    //You will send HALF of the total amount needed because each card will be doubled.
  cardImageSelector(){
    let allCards = []; //this will hold all image names.
    let cardsRandomlyChosen = [];

    for (i = 0; i < cards/2; i++){
      this.state.selectedImages.push(<img src={require('../assets/imgs/people/' + cardsRandomlyChosen[i] + '.png')}/>)
    }
    this.setState({
      selectedImages: cardsRandomlyChosen  //set state = the card names.
    })
  }
 

  render() {
    if (this.state.isToggleOnEasy === false && this.state.isToggleOnMedium === false && this.state.isToggleOnDifficult === false) {
      return(
        <div className="mode easyModeActive">
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
          <EasyGame isToggleOnEasy={this.state.isToggleOnEasy} cards = {this.state.cards} ImagesSelected={this.state.selectedImages}/>
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