import React, { Component } from 'react';
import aSingleCard from '../Images/card.jpg';
import '../Style/Cards.css';

class EasyGame extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedImages: this.props.selectedImages, //this contains an array of card backs
      isToggleOnEasy: this.props.isToggleOnEasy,  //this determines if we can see this component
      cards: this.props.cards, //this number is set in Controls.js
      cardDeck: []
    }
  }


flip(){
  console.log(this.state.cardDeck)

}
  //This component only renders if the Easy Mode is active.
  render() {
    //console.log("props in EasyGame:", this.props);
    //console.log("state in EasyGame:", this.state);
    let arrayOfCardBacks = ['p', 'i', 'k', 'a', 'c', 'h', 'p', 'i', 'k', 'a', 'c', 'h'];
    if (this.state.isToggleOnEasy === true){
      for (let i = 0; i < this.state.cards; i++){
       this.state.cardDeck.push(
          {frontImg:<img className="EasyCardImg" alt="Card" src={aSingleCard}/>,
          isFlipped: false, 
          backImg:arrayOfCardBacks[i], 
          cardNumber: i
          }
       )
      };
    }
    console.log(this.state);
      return (
        <div className="cards">
          <div className="cardContainer">
          {this.state.cardDeck.map((item, i) => {
            return(
              <li className="easyCardsLI" onClick={(e) => this.flip(e)} key={i}>{item.frontImg}</li>
            )})
          }
          </div>
        </div>
      );
  }
}

export default EasyGame;