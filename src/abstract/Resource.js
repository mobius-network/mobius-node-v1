const utils = require('../utils');

function Resource(requestor) {
  this.requestor = requestor;
}

Resource.extend = utils.extend;

Resource.prototype = {
  get({ action, payload }) {
    return this.requestor.get(this.resource, action, payload);
  },

  post({ action, payload }) {
    return this.requestor.post(this.resource, action, payload);
  },
};

module.exports = Resource;
