const Resource = require('../abstract/Resource');

const AppStore = Resource.extend({
  resource: 'app_store',

  balance({ appUid, email }) {
    return this.get({ action: 'balance', payload: { appUid, email } });
  },

  use({ appUid, email, numCredits }) {
    return this.post({ action: 'use', payload: { appUid, email, numCredits } });
  },
});

module.exports = AppStore;
