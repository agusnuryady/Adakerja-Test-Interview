export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setEmail = (data) => (dispatch) => {
  dispatch({ type: SET_EMAIL, payload: data });
};

export const setPassword = (data) => (dispatch) => {
  dispatch({ type: SET_PASSWORD, payload: data });
};
