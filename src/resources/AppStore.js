const utils = require('../utils');
const BaseResource = require('../core/BaseResource');

const AppStore = BaseResource.extend({
  resource: 'app_store',

  balance: function (params) {
    const appUid = utils.core.param('appUid', params);
    const email = utils.core.param('email', params);

    return this.get({
      action:   'balance',
      payload:  { app_uid: appUid, email }
    });
  },

  use: function (params) {
    const appUid = utils.core.param('appUid', params);
    const email = utils.core.param('email', params);
    const numCredits = utils.core.param('numCredits', params);

    return this.post({
      action:   'use',
      payload:  { app_uid: appUid, email, num_credits: numCredits }
    });
  }
});

module.exports = AppStore;
