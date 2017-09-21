const utils = require('./utils');
const resources = require('./resources');

const { param } = utils.core;

function Mobius(options) {
  this.options = {
    host: param('host', options, 'https://mobius.network/api'),
    version: param('version', options, 'v1'),
    auth: param('auth', options),
    apiKey: param('apiKey', options),
  };

  Object.keys(resources).forEach((name) => {
    this[name] = new resources[name](this.options);
  });
}

Mobius.prototype = {
  getApiKey() {
    return this.options.apiKey;
  },

  setApiKey(apiKey) {
    this.options.apiKey = apiKey;
  },
};

module.exports = Mobius;
