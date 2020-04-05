import { RECIEVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  // initialize state as empty object
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state, // this is questions portion of the state
        ...action.questions,
      };

    default:
      return state;
  }
}
