import * as types from "./types";
import * as quizServices from "../services/quizServices"

export const loadQuestionsInitAction = () =>({
    type: types.loadQuestionsInitType,
});

export const loadQuestionsSuccesAction = (data) =>({
    type: types.loadQuestionsSuccesType,
    payload: data,
});

export const loadQuestionsAction = (dispatch) =>{
    dispatch(loadQuestionsInitAction());
    const data = quizServices.loadQuestions();
    dispatch(loadQuestionsSuccesAction(data))
}

export const setCategoryAction = (category) => ({
    type: types.setCategoryType,
    payload: category
})

export const setCurrentQuestionAction = (question) => ({
    type: types.setCurrentQuestionType,
    payload: question
})

export const setTotalQuestionAction = (totalQuestion) => ({
    type: types.setTotalQuestionType,
    payload: totalQuestion
})

export const setScoreAction = (score) =>({
    type: types.setScoreType,
    payload: score
})

export const  answerSelectedAction= (selected) => ({
    type: types.answerSelectedType,
    payload: selected
})
