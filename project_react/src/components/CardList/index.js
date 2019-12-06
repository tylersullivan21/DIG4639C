import React from "react";
import Card from "../Card/";
import CardInput from "../CardInput/";


class CardList extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {cards: data.cards};

  }
  
  componentDidMount(){

    
  }

  removeDog = (event) => {
    
    // Get the 'datatitle' attribute
    let datatitle = event.target.getAttribute("datatitle");

    // Make a local copy of cards
    let localCards = this.state.cards;

    // Filter against the 'datatitle' name
    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });

    // Update state
    this.setState({cards: changedCards});

  }

  addDog = (event) => {

    // Prevent the normal page refresh
    event.preventDefault();

    // Get the title and content elements
    let titleElement = document.getElementById("newDogTitle");
    let contentElement = document.getElementById("newDogContent");

    if(titleElement.value.length !== 0 
      && contentElement.value.length !== 0) {

      // Create a new dog card
      let newDog = {
        title: titleElement.value,
        content: contentElement.value
      };

      // Reset the element values
      titleElement.value = "";
      contentElement.value = "";

      // Create local copy
      let localCards = this.state.cards;

      // Change local copy
      localCards.push(newDog);

      // Update state with changed, local copy
      this.setState({cards: localCards});

    }


  }

  render() {
    return(
      <div>
          <CardInput adddog={this.addDog} />
          {
              this.state.cards.map((card, index) => {
                return <Card 
                    key={index}
                    title={card.title} 
                    content={card.content}
                    removedog={this.removeDog}
                    />
            })
          }
          <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Return</button>
      </div>
    );
  }


}

export default CardList;