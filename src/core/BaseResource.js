const utils = require('../utils');

BaseResource.extend = utils.core.extend;

BaseResource.prototype = {
  get: function(params) {
    const args = Object.assign(
      this.options, params, { resource: this.resource }
    )

    return utils.api.get(args);
  }
}

function BaseResource(options) {
  this.options = options;
}

module.exports = BaseResource;
