import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { recieveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

// action creator for getting initial data
// this is a thunk because it returns a function
export function handleInitialData() {
  return dispatch => {
   dispatch(showLoading());

    // because we have access to dispatch we can make asynchronous requests
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
