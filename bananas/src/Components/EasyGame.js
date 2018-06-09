import React, { Component } from 'react';
import aSingleCard from '../Images/card.jpg';
import '../Style/Cards.css';

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
       this.state.cardDeck.push(<img className="EasyCardImg" alt="Card" src={aSingleCard}/>)
      };
    }
  
      return (
        <div className="cards">
          <div className="cardContainer">
          {this.state.cardDeck.map((item, i) => {
            return(
              <li className="easyCardsLI" key={i}>{item}</li>
            )})
          }
          </div>
        </div>
      );
  }
}

export default EasyGame;