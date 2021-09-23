import React from 'react';
import RegionSelector from "./regionSelector";
import { flip, toggleMemorization } from '../redux/cardFlip';
import { useSelector, useDispatch } from "react-redux";




export const FlashCards = () => {
    const dispatch = useDispatch();
    let cards = useSelector(state => state.flipCard.deck);
    let currentRegion = useSelector(state => state.flipCard.region);

    // let shuffledCards = [];
    // for (let card of cards) {
    //     let insertAtIndex = Math.floor(Math.random()*shuffledCards.length);
    //     shuffledCards.splice(insertAtIndex, 0, card);
    // }

    let currentDeck = cards;
    if (currentRegion !== "All Regions") {
        currentDeck = cards.filter((card) => {
            return (card.region === currentRegion)
        });
    }

    let unmemorizedDeck = currentDeck.filter((card) => {
        return !card.isMemorized;
    })

    let deck = unmemorizedDeck.map((card) => {
        let flipStatus = card.isFlipped ? "rotateY(0deg)" : " rotateY(180deg)";

        return (
            <div className="cardWrap" onClick={() => dispatch(flip(card.name))}>
                <div className="card" style={{transform: flipStatus}}>
                    <div className="cardFront">
                        <img className="flagImage" src={card.flags[0]} alt="a flag" />
                    </div>
                    <div className="cardBack">
                        <span>{card.name}</span>
                        <img className="flagImage" src={card.flags[0]} alt="a flag" />
                            <button onClick={() => dispatch(toggleMemorization(card.name))}>I know this one!</button>
                    </div>
                </div>
        </div>
        ); 
    });

    return (
        <div className="boardContainer">
            <h1>Flash Cards: {currentRegion}</h1>
            <RegionSelector />
            <div className="boardView">
                {deck}
            </div>
        </div>    
    );
}