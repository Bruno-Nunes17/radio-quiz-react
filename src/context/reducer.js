import * as types from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case types.loadQuestionsSuccesType:
      return {
        ...state,
        type: types.loadQuestionsSuccesType,
        questions: action.payload,
      };
    case types.setCategoryType:
      return {
        ...state,
        type: types.setCategoryType,
        category: action.payload,
      };

    case types.setCurrentQuestionType:
      return {
        ...state,
        type: types.setCurrentQuestionType,
        currentQuestion: action.payload,
      };
    case types.answerSelectedType:
      return {
        ...state,
        type: types.answerSelectedType,
        answerSelected: action.payload,
      };
    case types.setTotalQuestionType:
      return{
        ...state,
        type: types.setTotalQuestionType,
        totalQuestion: action.payload
      }
      case types.setScoreType:
      return{
        ...state,
        type: types.setScoreType,
        score: action.payload
      }
    default:
      return {
        ...state,
        type: action.type,
      };
  }
}
