import { useSelector, useDispatch } from 'react-redux';
import { assessQuiz } from '../redux/flagQuizRedux';

const QuizScorer = () => {
    let dispatch = useDispatch();
    let quizLength = useSelector(state => state.flagQuiz.quizLength);
    let quizDeck = useSelector(state => state.flagQuiz.currentQuizQuestions);

    const scoreQuiz = () => {
        let score = 0;
        for (let question of quizDeck) {
            let selectedAnswer = question.answerOptions.filter(option => option.isSelected === true);
            if (selectedAnswer.length > 0) {
                if (selectedAnswer[0].name === question.correctAnswer.name) score++;
            }
            
        }
        let percentage = parseInt((score/quizLength)*100);
        console.log("qL: ", quizLength);
        console.log("percentage: ", percentage);
        dispatch(assessQuiz(percentage));
    }

    return (
        <button onClick={scoreQuiz}>Submit</button>
    );
}

export default QuizScorer;