import { receiveQuestions, addQuestion, addAnswer } from "./questions";
import { receiveUsers } from "./users";
import { _getInitialData, _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getInitialData().then(({ users, questions }) => {
          dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading());
    });
  };
}

  export function handleAddQuestion (question) {
    
  return (dispatch) => {
    const { questionOne, questionTwo, author } = question;
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: author,
    }).then((question) => {
      dispatch(addQuestion(question))
      dispatch(hideLoading());
    });
  };}

  export function handleSaveAnswer ({ authedUser, qid, answer }) {
    
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser, qid, answer
    }).then(dispatch(addAnswer({ authedUser, qid, answer })))
      .then(() => dispatch(hideLoading()))
    }}