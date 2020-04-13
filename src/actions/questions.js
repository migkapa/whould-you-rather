import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions, // short form of users : users
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  // need access to the authedUser to change author property to authedUser
  // authedUser I can get from getState() with redux
  // I than need to dispatch the addQuestion action

  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    // save question to "db" first that dispatch the actions related to this
    return saveQuestion({
      ...question,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(answerObj) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(answerObj)
      .then(() => dispatch(answerQuestion(answerObj)))
      .then(() => dispatch(hideLoading()));
  };
}
