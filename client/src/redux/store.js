import { configureStore } from '@reduxjs/toolkit';
import flipCardReducer from './cardFlip';
import flagQuizReducer from './flagQuizRedux';
import userReducer from './userRedux'

export default configureStore({
    reducer: {
        flipCard: flipCardReducer,
        flagQuiz: flagQuizReducer,
        user: userReducer
    }
});