import React, { Component } from "react";
import cards from "../../cards";
import CardItem from "../CardItem/index";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import "./style.css";



class Game extends Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  };
  componentDidMount(){
    this.setState({ card: this.shuffleCard(this.state.card)})
  }

  shuffleCard = card => {
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
          {this.state.cards.map(card => (
            <CardItem
              key={card.id}
              id={card.id}
              src={card.image}
              name={card.name}
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
