export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const CHECK_TASK = 'CHECK_TASK';

export const addData = (data) => (dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: { data: { status: false, name: data } },
  });
};

export const deleteData = (data) => (dispatch) => {
  dispatch({ type: DELETE_DATA, payload: { data } });
};

export const editData = (name, index) => (dispatch) => {
  dispatch({ type: EDIT_DATA, payload: { name: name, index: index } });
};

export const checkTask = (status, index) => (dispatch) => {
  dispatch({ type: CHECK_TASK, payload: { status: status, index: index } });
};
