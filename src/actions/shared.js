import { getInitialData } from '../utils/api';
import { recieveUsers } from '../actions/users';
import { recieveQuestions } from '../actions/questions';
//import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';


export function handleInitialData() {
  // using a thunk here as we're dealing with async 
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions })=> {
      //dispatch(setAuthedUser(id));
      dispatch(recieveUsers( users ));
      dispatch(recieveQuestions( questions ));
      dispatch(hideLoading());
    })
  }
}