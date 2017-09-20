const fetch = require('node-fetch');
const urljoin = require('url-join');
const qs = require('qs');

const utils = require('../utils');
const ApiError = require('../core/ApiError');

function baseUrl(params) {
  return urljoin(
    params.host, params.version, params.resource, params.action,
    '?' + qs.stringify({ api_key: params.apiKey })
  );
}

function prepareHeaders(params) {
  if (params.auth) {
    return { Authorization: params.auth };
  }

  return {};
}

function handleError(json) {
  if (json.error) {
    throw new Error(json.error);
  }

  return json;
}

function request(method, headers, url, payload) {
  return fetch(url, {
    method: method,
    headers: headers,
    body: payload
  })
    .then(response => response.json())
    .then(handleError)
    .then(json => utils.object.toCamelCaseKeys(json))
}

function get(params) {
  const url = urljoin(baseUrl(params), '&' + qs.stringify(utils.object.toSnakeCaseKeys(params.payload)));

  return request('GET', prepareHeaders(params), url, {})
    .catch(error => {
      throw ApiError(params.resource, params.action, error.message)
    });
}

function post(params) {
  const url = urljoin(baseUrl(params), '&' + qs.stringify(utils.object.toSnakeCaseKeys(params.payload)));

  return request('POST', prepareHeaders(params), url, {})
    .catch(error => {
      throw new ApiError(params.resource, params.action, error.message)
    });
}

module.exports = {
  get,
  post
}
