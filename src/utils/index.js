import { Dimensions } from 'react-native';
import moment from 'moment';

export const heightByScreen = (percent) =>
  (percent / 100) * Dimensions.get('window').height;

export const widthByScreen = (percent) =>
  (percent / 100) * Dimensions.get('window').width;

export function isEmpty(value) {
  return value === null ||
    value === undefined ||
    String(value).trim() === '' ||
    value.length <= 0
    ? true
    : false;
}

export const dateFormat = (date, format) => moment(date).format(format);

export const errorFetch = (response) => {
  switch (response.code) {
    case 400:
      return { response, status: false, message: 'Bad Request' };
    case 401:
      return { response, status: false, message: 'Unauthorized' };
    case 403:
      return { response, status: false, message: 'Forbidden' };
    case 404:
      return { response, status: false, message: 'Not Found' };
    case 409:
      return { response, status: false, message: 'Conflict' };
    case 417:
      return { response, status: false, message: 'Expectation Failed' };
    case 500:
      return { response, status: false, message: 'Internal Server Error' };
    case 502:
      return { response, status: false, message: 'Bad Gateway' };
    case 503:
      return { response, status: false, message: 'Service Unavailable' };
    case 504:
      return { response, status: false, message: 'Gateway Timeout' };
    default:
      return { response, status: false, message: 'Network Error' };
  }
};
