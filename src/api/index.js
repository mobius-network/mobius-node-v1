const utils = require('./utils');
const ApiError = require('./ApiError');

function request(method, params) {
  const url = utils.makeUrl(params);
  const headers = utils.makeHeaders(params);

  return utils.makeRequest(method, headers, url, {})
    .catch((error) => {
      throw new ApiError(params.resource, params.action, error.message);
    });
}

function get(params) {
  return request('GET', params);
}

function post(params) {
  return request('POST', params);
}

module.exports = {
  get,
  post,
};
