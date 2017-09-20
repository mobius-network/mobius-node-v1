const utils = require('../utils');
const api = require('../api');

BaseResource.extend = utils.core.extend;

BaseResource.prototype = {
  get: function(params) {
    return this.request('GET', params);
  },

  post: function(params) {
    return this.request('POST', params);
  },

  request: function(method, params) {
    const args = Object.assign(
      this.options, params, { resource: this.resource }
    );

    return method === 'GET'
      ? api.get(args)
      : api.post(args)
  }
}

function BaseResource(options) {
  this.options = options;
}

module.exports = BaseResource;
