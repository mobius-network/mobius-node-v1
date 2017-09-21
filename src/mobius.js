const utils = require('./utils');
const resources = require('./resources');

function Mobius(options) {
  this.options = {
    host:     utils.core.param('host', options)     || 'https://mobius.network/api',
    version:  utils.core.param('version', options)  || 'v1',
    auth:     utils.core.param('auth', options),
    apiKey:   utils.core.param('apiKey', options)
  }

  for (const name in resources) {
    this[name] = new resources[name](this.options);
  }
}

Mobius.prototype = {
  getApiKey: function () {
    return this.options.apiKey;
  },

  setApiKey: function (apiKey) {
    this.options.apiKey = apiKey;
  }
}

module.exports = Mobius;
