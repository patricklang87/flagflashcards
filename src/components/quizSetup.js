import { useSelector, useDispatch } from 'react-redux';
import { changeQuizLength } from '../redux/flagQuizRedux';
import { generateQuiz, toggleDifficulty } from '../redux/flagQuizRedux';

const QuizSetup = () => {
    let deck = useSelector(state => state.flipCard.deck) || [];
    let currentRegion = useSelector(state => state.flipCard.region);
    let quizLength = useSelector(state => state.flagQuiz.quizLength);
    let setToDifficult = useSelector(state => state.flagQuiz.setToDifficult);
    let quizGenerated = useSelector(state => state.flagQuiz.quizGenerated);
    let dispatch = useDispatch();

    let currentDeck = deck;
    if (currentRegion !== "All Regions") {
        currentDeck = deck.filter((card) => {
            return (card.region === currentRegion)
        });
    }


    
    const generateQuizDeck = () => { 
        let quizDeck = [];
        let answerIndices = [];
        for (let i = 0; i < quizLength; i++ ) {
            let questionNumber = Math.floor(Math.random()*currentDeck.length);
            while (answerIndices.includes(questionNumber)) {
                questionNumber = Math.floor(Math.random()*currentDeck.length);
            }
            answerIndices.push(questionNumber);
            const correctAnswer = currentDeck[questionNumber];

            let difficultOptions = deck.filter((card) => card.subregion === correctAnswer.subregion);
            if (difficultOptions.length < 4) {
                difficultOptions = deck.filter((card) => card.region === correctAnswer.region);
            }
            if (difficultOptions.length < 4) {
                difficultOptions = deck;
            }

            const optionsDeck = (setToDifficult) ? difficultOptions : deck;

            console.log("optionsDeck: ", optionsDeck);

            let answerOptions = [];
            let optionIndices = [];
            for (let j = 0; j < 3; j++) {
                let optionNumber = Math.floor(Math.random()*optionsDeck.length);
                while (optionIndices.includes(optionNumber) || currentDeck[questionNumber].name === optionsDeck[optionNumber].name) {
                    optionNumber = Math.floor(Math.random()*optionsDeck.length);
                }
                optionIndices.push(optionNumber);
                answerOptions.push(optionsDeck[optionNumber]);
            }
            let correctAnswerSpliceIndex = Math.floor(Math.random()*3);
            answerOptions.splice(correctAnswerSpliceIndex, 0, correctAnswer, );
     
            const questionPacket = {
                correctAnswer: correctAnswer,
                answerOptions: answerOptions
            }
            
            quizDeck.push(questionPacket);
        }
        console.log("quizDeck: ", quizDeck);
        dispatch(generateQuiz(quizDeck));
    }
    
    const onChange = (e) => {
        let newQuizLength = e.target.value;
        dispatch(changeQuizLength(newQuizLength));
    };

    return (
        <div>
            <h3>Choose Quiz Length: </h3>
            <br />
            <input name="quizLength" onChange={onChange} type="number" min="1" max={currentDeck.length} /><span> (Max: {currentDeck.length})</span>
            <div onClick={() => dispatch(toggleDifficulty())}>
                <h3>Difficulty: {(setToDifficult) ? `Difficult` : `Normal`}</h3>
            </div>
            <br />
            <button onClick={generateQuizDeck}>Start Quiz</button>
        </div>
    );    
}

export default QuizSetup;