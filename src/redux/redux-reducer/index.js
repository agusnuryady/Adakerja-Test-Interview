import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import auth from './auth';
import persist from './persist';
import sholat from './sholat';
import todo from './todo';

export default combineReducers({
  auth,
  persist,
  sholat,
  todo,
});
