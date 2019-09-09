import React, { Component } from "react";
import cards from "../../cards";
import CardItem from "../CardItem/index";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/index";
import Header from "../Header/index";
// import Footer from "../Footer/index";
import "./style.css";



class Game extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  };
  componentDidMount(){
    this.setState({ cards: this.shuffleCard(this.state.cards)})
  }

  handleCorrectClick = (newCards) => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      cards: this.shuffleCard(newCards),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectClick = cards => {
    this.setState({
      cards: this.resetCard(cards),
      score: 0
    });
  };
  
  resetCard = cards => {
    const reset = cards.map(cards => ({ ...cards, clicked: false }));
    return this.shuffleCard(reset);
  }


  handleCardClick = id => {
    let isClicked = false;
    const newCards = this.state.cards.map(item => {
      const newAnimal = { ...item };
      // console.log(newAnimal);
      if(newAnimal.id === id) {
        console.log(newAnimal.clicked)
        // console.log(typeof newAnimal.clicked)
        if (newAnimal.clicked === false) {
          console.log(newAnimal);
          newAnimal.clicked = true;
          isClicked = true;
        }
      }
      return newAnimal
    });
    // console.log(isClicked);
    isClicked ? this.handleCorrectClick(newCards) : this.handleIncorrectClick(newCards);
  };




  shuffleCard = cards => {
    let i = cards.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
      i--;
    }
    return cards;
  };

  render() {
    return (
      <>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />

        <Wrapper>
          {this.state.cards.map(cards => (
            <CardItem
              key={cards.id}
              id={cards.id}
              src={cards.image}
              name={cards.name}
              cardClick={this.handleCardClick}
            //   onClick={ () => card.handleClick(card.id)}
             
            />
          ))}
        </Wrapper>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Game;
