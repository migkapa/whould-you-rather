import { RECIEVE_USERS } from '../actions/users';

export function users(state = {}, action) { // initialize state as empty object
  switch (action.type) {
    case RECIEVE_USERS :
      return {
        ...state, // this is users portion of the state
        ...action.users,
      };

    default:
      return state;
  }
}
