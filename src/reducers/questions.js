import {
  ADD_QUESTION,
  RECIEVE_QUESTIONS,
  ANSWER_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
  // initialize state as empty object
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state, // this is questions portion of the state
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ANSWER_QUESTION:
      const { answer, qid, authedUser } = action;
      const question = state[qid];
      return {
        ...state,
        [qid]: {
          ...question,
          [answer]: {
            ...question[answer],
            votes: question[answer].votes.concat([authedUser]),
          },
        },
      };

    default:
      return state;
  }
}
