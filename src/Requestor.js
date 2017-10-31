const axios = require('axios');
const utils = require('./utils');

function ApiError(message) {
  this.name = 'ApiError';
  this.message = message;
}

ApiError.prototype = Error.prototype;


function Requestor(options) {
  this.apiKey = options.apiKey;
  this.host = options.host || 'https://mobius.network/api';
  this.version = options.version || 'v1';
  this.auth = options.auth;
}

Requestor.prototype = {
  url(resource, action) {
    return `${this.host}/${this.version}/${resource}/${action}`;
  },

  headers() {
    const result = { 'x-api-key': this.apiKey };

    if (this.auth) {
      result.Authorization = this.auth;
    }

    return result;
  },

  handleError({ response }) {
    const message = response.data && response.data.error && response.data.error.message
      ? response.data.error.message : 'Somthing wrong';

    throw new ApiError(message);
  },

  request(method, resource, action, payload) {
    const url = this.url(resource, action);
    const headers = this.headers();

    const config = { method, url, headers };
    config[method === 'get' ? 'params' : 'data'] = utils.toSnakeCaseKeys(payload);

    return axios.request(config)
      .then(response => response.data)
      .then(json => utils.toCamelCaseKeys(json))
      .catch(this.handleError);
  },

  get(resource, action, payload) {
    return this.request('get', resource, action, payload);
  },

  post(resource, action, payload) {
    return this.request('post', resource, action, payload);
  },
};

module.exports = Requestor;
