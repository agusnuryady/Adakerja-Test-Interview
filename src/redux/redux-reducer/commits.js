import {
  CLEAR_DATA_COMMIT,
  GET_COMMIT_PENDING,
  GET_COMMIT_SUCCESS,
} from '../redux-actions';

const initialState = {
  data: [],
  title: '',
  isLoading: false,
  page: 1,
  totalPage: 0,
  size: 5,
};

export default (state = initialState, { type, payload, isLoadMore }) => {
  switch (type) {
    case GET_COMMIT_PENDING:
      return { ...state, isLoading: true };
    case GET_COMMIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: isLoadMore ? [...state.data, ...payload.data] : payload.data,
        title: payload.title,
        page: payload.page,
        totalPage: payload.totalPage,
        size: payload.size,
      };
    case CLEAR_DATA_COMMIT:
      return initialState;
    default:
      return state;
  }
};
