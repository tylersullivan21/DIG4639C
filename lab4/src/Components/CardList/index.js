import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {cards: data.cards};

  }
  //adding a function to add cards

  addCard = () => {
let cards = this.state.cards;
cards.push();

this.setState({cards: cards});
  }
  
  showCards() {

    return(
      <ul>
      {this.state.cards.map((card, index) => {
        return (<li key={index}>{card}</li>);
      })}
      </ul>
    );

  }

  remove = (event) => {
    
    let datatitle = event.target.getAttribute("datatitle");

    let localCards = this.state.cards;

    let fixedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    this.setState({cards: fixedCards});

  }

  render() {
    return(
      <div>
          {
              this.state.cards.map((card, index) => {
                return <Card 
                    key={index}
                    title={card.title} 
                    content={card.content}
                    dataclick={this.remove} />
            })
          }
      </div>
    );
  }


}

export default CardList;