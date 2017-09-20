const fetch = require('node-fetch');
const urljoin = require('url-join');
const qs = require('qs');

function baseUrl(params) {
  return urljoin(
    params.host, params.version, params.resource, params.action,
    '?' + qs.stringify({ api_key: params.apiKey })
  );
}

function auth(params) {
  if (params.auth) {
    return { Authorization: params.auth };
  }

  return {};
}

function request(method, headers, url, payload) {
  return fetch(url, {
    method: method,
    headers: headers,
    body: payload
  })
    .then(response => response.json())
}

function get(params) {
  const url = urljoin(baseUrl(params), '&' + qs.stringify(params.payload));

  return request('GET', auth(params), url, {});
}

function post(params) {
  const url = urljoin(baseUrl(params), '&' + qs.stringify(params.payload));

  return request('POST', auth(params), url, {});
}

module.exports = {
  get,
  post
}
