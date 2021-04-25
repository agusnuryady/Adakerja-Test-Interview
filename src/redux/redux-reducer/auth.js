import { SET_EMAIL, SET_PASSWORD } from '../redux-actions';

const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EMAIL:
      return { ...state, email: payload };
    case SET_PASSWORD:
      return { ...state, password: payload };
    default:
      return state;
  }
};
