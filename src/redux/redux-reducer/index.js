import { combineReducers } from 'redux';

//please short from a to z if adding new reducer
import persist from './persist';
import sholat from './sholat';
import todo from './todo';

export default combineReducers({
  persist,
  sholat,
  todo,
});
