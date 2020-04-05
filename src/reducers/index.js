import { combineReducers } from 'redux';
import { users } from './users';
import { loadingBarReducer } from 'react-redux-loading';


export default combineReducers({
  users,
  loadingBar: loadingBarReducer,
});