import reducer, {
  generateQuiz,
  handleSelection,
  assessQuiz,
  closeCurrentQuiz,
  incrementQuestion,
  decrementQuestion,
  changeQuizLength,
  toggleDifficulty,
} from '../redux/flagQuizRedux';

const question = (name) => ({
  name,
  answerOptions: [
    { name: 'A', isSelected: false },
    { name: 'B', isSelected: false },
    { name: 'C', isSelected: false },
  ],
});

describe('flagQuizRedux', () => {
  it('starts a quiz at the first question', () => {
    const state = reducer(undefined, generateQuiz([question('France'), question('Peru')]));
    expect(state.quizGenerated).toBe(true);
    expect(state.quizInProgress).toBe(true);
    expect(state.currentQuestion).toBe(0);
    expect(state.currentQuizQuestions).toHaveLength(2);
  });

  it('allows only one selected answer per question', () => {
    let state = reducer(undefined, generateQuiz([question('France')]));
    state = reducer(state, handleSelection({ questionIndex: 0, optionIndex: 0 }));
    state = reducer(state, handleSelection({ questionIndex: 0, optionIndex: 2 }));
    expect(state.currentQuizQuestions[0].answerOptions.map((o) => o.isSelected)).toEqual([
      false,
      false,
      true,
    ]);
  });

  it('keeps the current question within the quiz length', () => {
    let state = reducer(undefined, changeQuizLength(2));
    state = reducer(state, decrementQuestion());
    expect(state.currentQuestion).toBe(0);
    state = reducer(state, incrementQuestion());
    state = reducer(state, incrementQuestion());
    expect(state.currentQuestion).toBe(1);
  });

  it('records the last score and keeps the top score', () => {
    let state = reducer(undefined, generateQuiz([question('France')]));
    state = reducer(state, assessQuiz(4));
    expect(state.quizInProgress).toBe(false);
    expect(state.lastScore).toBe(4);
    expect(state.currentTopScore).toBe(4);

    state = reducer(state, assessQuiz(2));
    expect(state.lastScore).toBe(2);
    expect(state.currentTopScore).toBe(4);
  });

  it('clears the quiz when closed', () => {
    let state = reducer(undefined, generateQuiz([question('France')]));
    state = reducer(state, closeCurrentQuiz());
    expect(state.quizGenerated).toBe(false);
    expect(state.currentQuizQuestions).toEqual([]);
  });

  it('toggles difficult mode', () => {
    const state = reducer(undefined, toggleDifficulty());
    expect(state.setToDifficult).toBe(true);
  });
});
