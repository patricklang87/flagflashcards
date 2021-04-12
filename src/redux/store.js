import { configureStore } from '@reduxjs/toolkit';
import flipCardReducer from './cardFlip';
import flagQuizReducer from './flagQuizRedux';

export default configureStore({
    reducer: {
        flipCard: flipCardReducer,
        flagQuiz: flagQuizReducer
    }
});