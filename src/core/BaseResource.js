const utils = require('../utils');

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
      ? utils.api.get(args)
      : utils.api.post(args)
  }
}

function BaseResource(options) {
  this.options = options;
}

module.exports = BaseResource;
