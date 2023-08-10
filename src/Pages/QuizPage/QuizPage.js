import { useAppContext } from "../../context/AppContext";
import {
  setCurrentQuestionAction,
  answerSelectedAction,
  setTotalQuestionAction,
  setScoreAction,
} from "../../context/action";
import Button from "../../Components/Button/Button";
import "./index.css";
import { useEffect } from "react";

function QuizPage() {
  const { state, dispatch } = useAppContext();

  const categoryIndex = () => {
    const category = state.questions.map((category) => category.category);
    const categoryIndex = category.findIndex(function (tema) {
      return state.category === tema;
    });
    return categoryIndex;
  };

  const categoryQuestions = () => {
    const questions = state.questions.map((question) => question.questions);
    const categoryQuestions = questions[categoryIndex()];
    return categoryQuestions;
  };

  const total = categoryQuestions().length;

  const quiz = () => {
    let index = state.currentQuestion - 1;
    const currentQuestion = categoryQuestions()[index];
    return currentQuestion;
  };

  const setCurrentQuestion = () => {
    let question = state.currentQuestion + 1;
    if (question <= categoryQuestions().length) {
      dispatch(setCurrentQuestionAction(question));
      dispatch(answerSelectedAction(false));
    }
    return;
  };

  const handleClick = (resposta) => {
    let score = state.score + 1;
    if (resposta === quiz().answer) {
      dispatch(answerSelectedAction(true));
      dispatch(setScoreAction(score));
    } else {
      dispatch(answerSelectedAction(true));
    }
  };

  useEffect(() => {
    let totallet = total;
    dispatch(setTotalQuestionAction(totallet));
  }, [dispatch, total]);
  return (
    <>
      <h1 className="mt-1 ">
        {state.category ? state.category : "sem titulo"}
      </h1>
      <>
        <div className="board mt-3">
          <p className="question-number mt-1">
            Pergunta {state.currentQuestion} de {state.totalQuestion}
          </p>
          <div className="questions mt-1 p-3">
            <h1>{quiz().question}</h1>
          </div>
          <div className="alternative mt-3 mb-3 d-flex flex-column align-items-center">
            {quiz().options.map((option, optionIndex) => (
              <button
              className={`
              alternative-button
                ${state.answerSelected && option === quiz().answer ? "correct" : ""} ${
                  state.answerSelected && option !== quiz().answer ? "wrong" : ""
              }`}
                disabled={state.answerSelected}
                key={optionIndex}
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <Button
          link={state.currentQuestion === state.totalQuestion ? "/gameover": ""}
          variant={"outline-dark"}
            margin={"m-2"}
            onClick={() => {
              quiz(1);
              setCurrentQuestion();
            }}
            title="Poxima"
          ></Button>
        </div>
      </>
    </>
  );
}
export default QuizPage;
