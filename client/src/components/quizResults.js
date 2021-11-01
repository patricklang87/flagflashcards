import { useSelector, useDispatch } from 'react-redux';
import { closeCurrentQuiz } from '../redux/flagQuizRedux';
import { addMemorizedFlag, removeMemorizedFlag } from '../redux/userRedux';
import { addFlag, removeFlag } from '../utils/memorized';

const QuizResults = () => {
    const currentQuizQuestions = useSelector(state => state.flagQuiz.currentQuizQuestions);
    const memorized = useSelector(state => state.user.memorizedFlags);
    const mainDeck = useSelector(state => state.flipCard.deck);
    let dispatch = useDispatch();

    const colorForCorrect = {
        backgroundColor: "rgb(208, 247, 208)"
    };

    const colorForIncorrect = {
        backgroundColor: "rgb(247, 208, 208)"
    };

    const handleMemorize = (card) => {
        dispatch(addMemorizedFlag(card));
        addFlag(card);
    }

    const handleForget = (card) => {
        dispatch(removeMemorizedFlag(card));
        removeFlag(card);
    }
    

    const resultsDiv = currentQuizQuestions.map((item, index) => {
        let selectedResponse = item.answerOptions.filter((option) => {
           return option.isSelected === true
        });

        let responseDisplay;
        if (selectedResponse[0]) {
            responseDisplay = (
                <div>
                    <img src={selectedResponse[0].flags.png} alt={selectedResponse[0].name} />
                    <p>You selected: {selectedResponse[0].name}.</p> 
                </div>
            );
        } else { 
            responseDisplay = (
                <div>
                    <p>No response selected.</p>
                </div>
            );
        }

        const correctResponse = item.correctAnswer;
        const isCorrect = ((selectedResponse[0]) && item.correctAnswer.name === selectedResponse[0].name);

        const correctResponseDisplay = (
            <div>
                <img src={correctResponse.flags.png} alt={correctResponse.name} />
                <p>Correct response: {correctResponse.name}.</p>  
            </div> 
        );

        let optionIfCorrect;
        if (!memorized.includes(item.correctAnswer.name)) {
            optionIfCorrect = (
                <button onClick={() => handleMemorize(correctResponse.name)}>Mark as Memorized</button>);
        } else {
            optionIfCorrect = <h3>Memorized &#10004;</h3>;
        }

        let optionIfIncorrect;
        if (memorized.includes(item.correctAnswer.name)) {
            optionIfIncorrect = (
                <button onClick={() => handleForget(correctResponse.name)}>Mark  {correctResponse.name} as Not Memorized</button>);
        } else {
            optionIfIncorrect = <h3>Not Memorized &#10008;</h3>;
        }

        return (    
                <div className="resultDiv" style={(isCorrect) ? colorForCorrect : colorForIncorrect} >
                    <p>Question {index + 1}</p>
                    <div className="results">
                        {correctResponseDisplay}
                        {responseDisplay}
                    </div>
                    {(isCorrect) ? optionIfCorrect : optionIfIncorrect}
                </div>
        );
    });

    const closeQuiz = () => {
        dispatch(closeCurrentQuiz());
    }

    return (
        <div className="resultsComponent">
            <h2>Results</h2>
            <button onClick={closeQuiz}>Close Results</button>
            <div className="allResults">
                {resultsDiv}
            </div>
            <button onClick={closeQuiz}>Close Results</button> 
        </div>
    );
}

export default QuizResults;