export const GET_COMMIT_PENDING = 'GET_COMMIT_PENDING';
export const GET_COMMIT_SUCCESS = 'GET_COMMIT_SUCCESS';
export const CLEAR_DATA_COMMIT = 'CLEAR_DATA_COMMIT';

export const setDataCommits = (data, more) => (dispatch) => {
  dispatch({ type: GET_COMMIT_PENDING });
  setTimeout(() => {
    dispatch({ type: GET_COMMIT_SUCCESS, payload: data, isLoadMore: more });
  }, 1500);
};

export const clearDataCommits = () => (dispatch) => {
  dispatch({ type: CLEAR_DATA_COMMIT });
};
