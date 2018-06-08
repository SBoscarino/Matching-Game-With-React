import React, { Component } from 'react';
import aSingleCard from '../Images/card.jpg'

class EasyGame extends Component {
  constructor(props){
    super(props)
    this.state = {
      isToggleOnEasy: this.props.isToggleOnEasy,
      cards: 20,
      cardDeck: []
    }
  }

  //This component only renders if the Easy Mode is active.
  render() {
    console.log("props in EasyGame:", this.props);
    console.log("state in EasyGame:", this.state);
    if (this.state.isToggleOnEasy === true){
      for (let i = 0; i < this.state.cards; i++){
       this.state.cardDeck.push(<img className="EasyCardsActual" alt="Card" src={aSingleCard}/>)
      };
    }
  
      return (
        <div className="Cards">
        <p>Easy Mode Game goes here!</p>
        {this.state.cardDeck.map((item, i) => {
          return(
            <li key={i}>{item}</li>
          )})
        });
        </div>
      );
  }
}

export default EasyGame;