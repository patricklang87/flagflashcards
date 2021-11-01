import { useSelector } from 'react-redux';

const QuizScoreDisplay = () => {

    const lastScore = useSelector(state => state.flagQuiz.lastScore);
    const currentTopScore = useSelector(state => state.flagQuiz.currentTopScore);

    return (
        <div className="scoreDisplay">
            <h3>Current Score: {lastScore}</h3>
            <h3>Personal Best: {currentTopScore}</h3>
        </div>
    );
}

export default QuizScoreDisplay;