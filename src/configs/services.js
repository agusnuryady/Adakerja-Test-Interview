import {
  get,
  post,
  patch,
  put,
  postForm,
  postWithProgress,
} from './networking';

export const endpoint = {
  //please short from a to z or by category if adding new api service
  getAllCity: async (abort) => get('sholat/format/json/kota', abort),
  getCityId: async (city, abort) =>
    get(`sholat/format/json/kota/nama/${city}`, abort),
  getJadwalSholat: async (id, date, abort) =>
    get(`sholat/format/json/jadwal/kota/${id}/tanggal/${date}`, abort),
};

export default endpoint;
