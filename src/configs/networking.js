/* global fetch:false */
import { API_URL, Authorization } from '@env';

export const config = {
  baseUrl: API_URL,
};

export const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
};

const futch = (url, opts = {}, onProgress) => {
  let xhr = new XMLHttpRequest();
  let promise = new Promise((res, rej) => {
    xhr.open(opts.method || 'get', url);
    for (let k in opts.headers || {}) {
      xhr.setRequestHeader(k, opts.headers[k]);
    }
    xhr.onload = (e) => res(e.target);
    xhr.onerror = rej;
    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = onProgress;
    }
    xhr.send(opts.body);
  });
  promise.abort = () => xhr.abort();
  return promise;
};

const futchData = async (url, params, progress, isForm = false) => {
  // const token = 'chage this value'; //get from asynstorage

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
  };

  if (isForm) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`,
    };
  }

  const response = await futch(
    url,
    {
      ...params,
      headers,
    },
    progress
  );
  if (response.status === STATUS_CODE.NO_CONTENT) {
    return {};
  }

  const json = JSON.parse(response._response);

  return json;
};

const fetchData = async (url, abort, params, customHeaders, isForm = false) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
    ...customHeaders,
  };

  if (isForm) {
    headers = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${token}`,
      ...customHeaders,
    };
  }
  // const isAuth = await 'chage this value'; //get from asynstorage
  // const token = await 'chage this value'; //get from asynstorage
  // if (isAuth) {
  //   headers = {
  //     ...headers,
  //     Authorization: `Bearer ${token}`,
  //   };
  // } else {
  //   headers = {
  //     ...headers,
  //     Authorization: Authorization,
  //   };
  // }

  const response = await fetch(url, {
    ...params,
    headers,
    signal: abort,
  });
  if (response.status === STATUS_CODE.NO_CONTENT) {
    return {};
  }
  const json = await response.json();

  return json;
};

const get = async (endpoint, abort = null, params = {}, headers = {}) => {
  let queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${config.baseUrl}${endpoint}${queryString}`;
  const fetchParams = {
    method: 'GET',
  };

  return fetchData(url, abort, fetchParams, headers);
};

const post = async (
  endpoint,
  abort = null,
  params = {},
  headers = {},
  isForm = false
) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers, isForm);
};

const postForm = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: params,
  };
  return fetchData(url, abort, fetchParams, headers, true);
};

const postWithProgress = async (
  endpoint,
  params = {},
  progress,
  isForm = false
) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: isForm ? params : JSON.stringify(params),
  };
  return futchData(url, fetchParams, progress, isForm);
};

const patch = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PATCH',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers);
};

const put = async (endpoint, abort = null, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PUT',
    body: JSON.stringify(params),
  };
  return fetchData(url, abort, fetchParams, headers);
};

const remove = async (endpoint, abort = null, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'DELETE',
  };
  return fetchData(url, abort, fetchParams, headers);
};

export { get, post, postForm, put, patch, remove, postWithProgress };
