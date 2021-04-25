import { ADD_DATA, DELETE_DATA, CHECK_TASK, EDIT_DATA } from '../redux-actions';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return { ...state, data: [...state.data, payload.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data, index) => index !== payload.data),
      };
    case EDIT_DATA:
      state.data[payload.index].name = payload.name;
      return {
        ...state,
        data: state.data,
      };
    case CHECK_TASK:
      state.data[payload.index].status = payload.status;
      return {
        ...state,
        data: state.data,
      };
    default:
      return state;
  }
};
