import { useSelector, useDispatch } from 'react-redux';
import { handleSelection, incrementQuestion, decrementQuestion, closeCurrentQuiz } from '../redux/flagQuizRedux';
import QuizScorer from './scoreQuiz';


const QuizBody = () => {
    const quizDeck = useSelector(state => state.flagQuiz.currentQuizQuestions);
    let quizInProgress = useSelector(state => state.flagQuiz.quizInProgress);
    let quizGenerated = useSelector(state => state.flagQuiz.quizGenerated);
    let questionNumber = useSelector(state => state.flagQuiz.currentQuestion);
    let dispatch = useDispatch();

        let quizQuestions = quizDeck.map((question, questionIndex) => {
            let options = question.answerOptions.map((choice, optionIndex) => {

                const onClick = () => {
                    if (quizInProgress) {
                        dispatch(handleSelection({questionIndex: questionIndex, optionIndex: optionIndex}));
                    }     
                }


                const selectedStyle = {
                    border: "5px solid yellow"
                };

                const unselectedStyle = {
                    border: null
                };

                return (
                    <div className="quizOption">
                        <img onClick={onClick} className="quizFlag" src={choice.flag} alt="a flag" style={choice.isSelected ? selectedStyle : unselectedStyle } />
                    </div>
                );
            })

            return (
                <div className="questionContent" >
                    <h3>{questionIndex + 1}) Which flag represents <strong>{quizDeck[questionIndex].correctAnswer.name}</strong>?</h3>
                    <div className="answerOptions">
                        {options}
                    </div> 
                </div>    
            );
        });

        const closeQuiz = () => {
            dispatch(closeCurrentQuiz());
        }
        const quizNav = (
            <div>
                <button onClick={() => dispatch(decrementQuestion())} >PREVIOUS</button>
                <button onClick={() => dispatch(incrementQuestion())} >NEXT</button>
                <br />
                <br />
                <QuizScorer />
                <br />
                <button onClick={closeQuiz}>End Quiz</button>              
            </div>     
        );

        let currentQuestionDis = quizQuestions[questionNumber];
        

    return (
        <div className="quizBody">
            {quizGenerated && currentQuestionDis}
            <br />
            {quizGenerated && quizNav}    
        </div>
    );
}

export default QuizBody;