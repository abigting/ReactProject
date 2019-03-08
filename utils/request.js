import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({data}))
    .catch(err => ({err}));
}

function patch(url, data) {
  return request(url, {
    headers: {"Content-Type": "application/json"},
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify(data)
  })
}

function post(url, data) {
  return request(url, {
    headers: {"Content-Type": "application/json"},
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data)
  })
}

function get(url) {
  return request(url, {
    method: "GET",
    credentials: 'include',
  })
}

export function fetchRequest(url, opt) {
  let options = Object.assign({method: 'GET', data: ''}, opt);
  switch (options.method.toUpperCase()) {
    case 'POST':
      return post(url, options.data);
    case 'PATCH':
      return patch(url, options.data);
    case 'GET':
      if (options.data) {
        url = `${url}?${queryString.stringify(options.data)}`;
      }
      return get(url);
    default:
      return get(url);
  }

}
