import { createSlice } from '@reduxjs/toolkit';
import { fetchFlags } from './fetchFlags';


export const cardFlipSlice = createSlice({
    name: "cardFlip",
    initialState: {
        deck: [],
        region: "All Regions",
        searchTerm: ''
    },
    reducers: {
        loadCards: (state, action) => {
            let deck = action.payload;
            let newDeck = deck.map((card, index) => {
               return {...card,
            isFlipped: false,
            isSelected: false,
            isMemorized: false,
            mainDeckIndex: index }
            });
            state.deck = newDeck;
        },
        changeRegion: (state, action) => {
            let region = action.payload;
            state.region = region;
        },
        flip: (state, action) => {
            const deck = state.deck;
            let updatedDeck = [];
            for (let card of deck) {
                if (card.name === action.payload) { 
                    card.isFlipped = !card.isFlipped
                }
            updatedDeck.push(card);
            }
            state = {
                ...state,
                deck: updatedDeck
            }
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        deleteSearchTerm: (state) => {
            state.searchTerm = '';
        },
        toggleMemorization: (state, action) => {
            const deck = state.deck;
            let updatedDeck = [];
            for (let card of deck) {
                if (card.name === action.payload) { 
                    card.isMemorized = !card.isMemorized
                }
            updatedDeck.push(card);
            }
            state = {
                ...state,
                deck: updatedDeck
            }
        },
        markAsKnown: (state, action) => {
            const deck = state.deck;
            let updatedDeck = [];
            for (let card of deck) {
                if (card.name === action.payload) { 
                    card.isMemorized = true;
                }
            updatedDeck.push(card);
            }
            state = {
                ...state,
                deck: updatedDeck
            }
        },
        markAsUnknown: (state, action) => {
            const deck = state.deck;
            let updatedDeck = [];
            for (let card of deck) {
                if (card.name === action.payload) { 
                    card.isMemorized = false;
                }
            updatedDeck.push(card);
            }
            state = {
                ...state,
                deck: updatedDeck
            }
        }
    }
});

export const { flip, loadCards, changeRegion, updateSearchTerm, deleteSearchTerm, toggleMemorization, markAsKnown, markAsUnknown } = cardFlipSlice.actions;
export default cardFlipSlice.reducer;