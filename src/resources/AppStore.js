const utils = require('../utils');
const BaseResource = require('../core/BaseResource');

const param = utils.core.param;

const AppStore = BaseResource.extend({
  resource: 'app_store',

  balance: function (params) {
    const appUid = param('appUid', params);
    const email = param('email', params);

    return this.get({
      action:   'balance',
      payload:  { app_uid: appUid, email }
    });
  },

  use: function (params) {
    const appUid = param('appUid', params);
    const email = param('email', params);
    const numCredits = param('numCredits', params);

    return this.post({
      action:   'use',
      payload:  { app_uid: appUid, email, num_credits: numCredits }
    });
  }
});

module.exports = AppStore;
