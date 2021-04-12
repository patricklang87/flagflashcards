import QuizSetup from './quizSetup';
import QuizBody from './quizBody';
import QuizScoreDisplay from './quizScoreDisplay';
import RegionSelector from './regionSelector';
import { useSelector } from 'react-redux';

const FlagQuiz = () => {
    let activeRegion = useSelector(state => state.flipCard.region);
    let inProgress = useSelector(state => state.flagQuiz.quizInProgress);

   return (
       <div>
           <h1>Flag Quiz: {activeRegion}</h1>
           <RegionSelector />
           <div className="quizInfo">
            {(!inProgress) && <QuizSetup />}
            <QuizScoreDisplay />
           </div>
           <QuizBody />
       </div>
   ); 
}

export default FlagQuiz;