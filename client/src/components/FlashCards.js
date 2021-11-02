import React from 'react';
import RegionSelector from "./regionSelector";
import { flip } from '../redux/cardFlip';
import { addMemorizedFlag } from '../redux/userRedux';
import { addFlag } from '../utils/memorized';
import { useSelector, useDispatch } from "react-redux";

export const FlashCards = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);
    let cards = useSelector(state => state.flipCard.deck);
    let currentRegion = useSelector(state => state.flipCard.region);
    const memorized = useSelector(state => state.user.memorizedFlags);

    // let shuffledCards = [];
    // for (let card of cards) {
    //     let insertAtIndex = Math.floor(Math.random()*shuffledCards.length);
    //     shuffledCards.splice(insertAtIndex, 0, card);
    // }

    const handleMemorize = (card) => {
        dispatch(addMemorizedFlag(card));
        if (currentUser) {
            addFlag(card);
        }
    }

    let currentDeck = cards;
    if (currentRegion !== "All Regions") {
        currentDeck = cards.filter((card) => {
            return (card.region === currentRegion)
        });
    }

    let unmemorizedDeck = currentDeck.filter((card) => {
        return !memorized.includes(card.name);
    })

    let deck = unmemorizedDeck.map((card) => {
        let flipStatus = card.isFlipped ? "rotateY(0deg)" : " rotateY(180deg)";

        return (
            <div key={card.name + 'flash'} className="cardWrap" onClick={() => dispatch(flip(card.name))}>
                <div className="card" style={{transform: flipStatus}}>
                    <div className="cardFront">
                        <img className="flagImage" src={card.flags.png} alt="a flag" />
                    </div>
                    <div className="cardBack">
                        <span>{card.name}</span>
                        <img className="flagImage" src={card.flags.png} alt="a flag" />
                            <button onClick={() => handleMemorize(card.name)}>I know this one!</button>
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