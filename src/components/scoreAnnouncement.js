import { useSelector } from 'react-redux';

const ScoreAnnouncement = () => {
    let score = useSelector(state => state.flagQuiz.lastScore);
    let closedStyle = {
        display: "none"
    }

    return (
        <div className="scoreAnnouncement">
            <h3>You scored {score}%</h3>
            <button>Close</button>
        </div>
    );
}