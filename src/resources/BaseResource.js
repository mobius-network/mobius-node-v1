const utils = require('../utils');
const api = require('../api');

function BaseResource(options) {
  this.options = options;
}

BaseResource.extend = utils.core.extend;

BaseResource.prototype = {
  get(params) {
    return this.request('GET', params);
  },

  post(params) {
    return this.request('POST', params);
  },

  request(method, params) {
    const args = Object.assign(this.options, params, { resource: this.resource });

    return method === 'GET'
      ? api.get(args)
      : api.post(args);
  },
};

module.exports = BaseResource;
