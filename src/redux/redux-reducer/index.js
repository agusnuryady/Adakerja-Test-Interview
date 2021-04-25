import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import auth from './auth';
import commits from './commits';
import persist from './persist';

export default combineReducers({
  auth,
  commits,
  persist,
});
