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

export function abbreviateNumber(number) {
  var SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
  // eslint-disable-next-line no-bitwise
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) {
    return number;
  }

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1).replace(/\.0$/, '') + suffix;
}
