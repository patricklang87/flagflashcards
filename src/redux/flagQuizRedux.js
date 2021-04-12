import { createSlice } from '@reduxjs/toolkit';

export const flagQuizSlice = createSlice({
    name: "flagQuizRedux",
    initialState: {
        quizGenerated: false,
        quizInProgress: false,
        currentQuizQuestions: [],
        lastScore: 0,
        currentTopScore: 0,
        currentQuestion: 0,
        quizLength: 10 || this.deck.length
    },
    reducers: {
        changeQuizLength: (state, action) => {
            state.quizLength = action.payload;
        },
        generateQuiz: (state, action) => {
            state.quizInProgress = true;
            state.currentQuizQuestions = action.payload;
            state.quizGenerated = true;
        },
        handleSelection: (state, action) => {
            let questionNumber = action.payload.questionIndex;
            let selectedAnswer = action.payload.optionIndex;
            for (let item of state.currentQuizQuestions[questionNumber].answerOptions) {
                item.isSelected = false;
            }
            state.currentQuizQuestions[questionNumber].answerOptions[selectedAnswer].isSelected = true;
        },
        assessQuiz: (state, action) => {
            state.quizInProgress = false;
            state.lastScore = action.payload;
            if (action.payload > state.currentTopScore) state.currentTopScore = action.payload;
        },
        closeCurrentQuiz: (state) => {
            state.quizGenerated = false;
            state.quizInProgress = false;
            state.currentQuizQuestions = [];
        },
        incrementQuestion: (state) => {
            let questionNumber = state.currentQuestion;
            questionNumber++;
            if (questionNumber >= state.quizLength) questionNumber = 0;
            state.currentQuestion = questionNumber;
        },
        decrementQuestion: (state) => {
            let questionNumber = state.currentQuestion;
            questionNumber--;
            if (questionNumber < 0) questionNumber = state.quizLength - 1;
            state.currentQuestion = questionNumber;
        },
    }
});

export const { generateQuiz, handleSelection, assessQuiz, closeCurrentQuiz, changeQuizLength, incrementQuestion, decrementQuestion } = flagQuizSlice.actions;
export default flagQuizSlice.reducer;