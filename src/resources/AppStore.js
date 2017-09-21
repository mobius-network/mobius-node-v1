const utils = require('../utils');
const BaseResource = require('../core/BaseResource');

const { param } = utils.core;

const AppStore = BaseResource.extend({
  resource: 'app_store',

  balance(params) {
    const appUid = param('appUid', params);
    const email = param('email', params);

    return this.get({
      action: 'balance',
      payload: { appUid, email },
    });
  },

  use(params) {
    const appUid = param('appUid', params);
    const email = param('email', params);
    const numCredits = param('numCredits', params);

    return this.post({
      action: 'use',
      payload: { appUid, email, numCredits },
    });
  },
});

module.exports = AppStore;
