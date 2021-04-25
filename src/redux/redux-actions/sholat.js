import { ENDPOINT } from '../../configs';

export const GET_JADWAL_PENDING = 'GET_JADWAL_PENDING';
export const GET_JADWAL_SUCCESS = 'GET_JADWAL_SUCCESS';
export const GET_JADWAL_ERROR = 'GET_JADWAL_ERROR';

export const getJadwal = (id, date, abort) => async (dispatch) => {
  try {
    dispatch({ type: GET_JADWAL_PENDING });
    const res = await ENDPOINT.getJadwalSholat(id, date, abort);
    dispatch({
      type: GET_JADWAL_SUCCESS,
      payload: { data: res.jadwal.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_JADWAL_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: GET_JADWAL_ERROR });
    }
  }
};
