import React, { Component } from "react";
import cards from "../../cards";
// import CardClick from "../CardClick/index";
import Nav from "../Nav/index";
import Container from "../Container/index";



class Game extends Component {
    state = {
        cards,
        score: 0,
        topScore: 0
    }

    render() {
        return (
            <>
            <Nav score={this.state.score} />
            <Container>
            {this.state.cards.map(card => (
                <div>
                    {/* key={card.id} */}
                    {/* id={card.id} */}
                    <div>
                        key={card.id}
                        id={card.id}
                    <img src={card.image} alt={card.name}/>
                    </div>
                    
                    {/* <div className="img-container">
                    src={card.image}
                    </div> */}
                </div>
                ))}
            </Container>
            </>
        )
    }
}

export default Game;