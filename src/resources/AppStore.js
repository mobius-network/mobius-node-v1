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
  }
});

module.exports = AppStore;
