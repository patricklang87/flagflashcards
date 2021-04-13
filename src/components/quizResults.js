import { useSelector, useDispatch } from 'react-redux';
import { closeCurrentQuiz } from '../redux/flagQuizRedux';

const QuizResults = () => {
    const currentQuizQuestions = useSelector(state => state.flagQuiz.currentQuizQuestions);
    let dispatch = useDispatch();
    

    const resultsDiv = currentQuizQuestions.map((item, index) => {
        let selectedResponse = item.answerOptions.filter((option) => {
           return option.isSelected === true
        });

        let responseDisplay;
        if (selectedResponse[0]) {
            responseDisplay = (
                <div>
                    <img src={selectedResponse[0].flag} alt={selectedResponse[0].name} />
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
        const correctResponseDisplay = (
            <div>
                <img src={correctResponse.flag} alt={correctResponse.name} />
                <p>Correct response: {correctResponse.name}.</p>  
            </div> 
        );

        return (
            
                <div className="resultDiv">
                    <p>Question {index + 1}</p>
                    <div className="results">
                        {correctResponseDisplay}
                        {responseDisplay}
                    </div>
                </div>

        );
    });

    const closeQuiz = () => {
        dispatch(closeCurrentQuiz());
    }

    return (
        <div>
            <h2>Results</h2>
            <div className="allResults">
                {resultsDiv}
            </div>
            <button onClick={closeQuiz}>End Quiz</button> 
        </div>
    );
}

export default QuizResults;