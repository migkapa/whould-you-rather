import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question).then((question) => question);
}

export function saveQuestionAnswer(question) {
  return _saveQuestionAnswer(question).then((question) => question);
}
