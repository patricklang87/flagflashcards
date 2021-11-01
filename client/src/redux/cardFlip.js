import { createSlice } from '@reduxjs/toolkit';


export const cardFlipSlice = createSlice({
    name: "cardFlip",
    initialState: {
        deck: [],
        region: "All Regions",
        searchTerm: ''
    },
    reducers: {
        loadCards: (state, action) => {
            let deck = action.payload || []; // added ||[] for instances of api failure
            let newDeck = deck.map((card, index) => {
               return {...card,
            isFlipped: false,
            isSelected: false,
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
        }
    }
});

export const { flip, loadCards, changeRegion, updateSearchTerm, deleteSearchTerm } = cardFlipSlice.actions;
export default cardFlipSlice.reducer;