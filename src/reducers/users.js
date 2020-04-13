import { RECIEVE_USERS } from '../actions/users';
import { ANSWER_QUESTION } from '../actions/questions';

export default function users(state = {}, action) { // initialize state as empty object
  switch (action.type) {
    case RECIEVE_USERS :
      return {
        ...state, // this is users portion of the state
        ...action.users,
      };

    case ANSWER_QUESTION : 
    const user = state[action.authedUser];

    return {
      ...state,
      [action.authedUser] : {
        ...user,
        answers: {
          ...user.answers,
          [action.qid] : action.answer
        }
      }
    }

    default:
      return state;
  }
}
