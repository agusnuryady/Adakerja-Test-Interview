import {
  GET_JADWAL_ERROR,
  GET_JADWAL_PENDING,
  GET_JADWAL_SUCCESS,
} from '../redux-actions';

const initialState = {
  isLoading: false,
  isFirst: true,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JADWAL_PENDING:
      return { ...state, isLoading: true };
    case GET_JADWAL_SUCCESS:
      return { ...state, isLoading: false, isFirst: false, data: payload.data };
    case GET_JADWAL_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
