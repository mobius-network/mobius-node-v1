const utils = require('../utils');
const BaseResource = require('../core/BaseResource');

const Tokens = BaseResource.extend({
  resource: 'tokens',

  register: function (params) {
    const tokenType = utils.core.param('tokenType', params);
    const name = utils.core.param('name', params);
    const symbol = utils.core.param('symbol', params);
    const address = utils.core.param('address', params);

    return this.post({
      action:   'register',
      payload:  { token_type: tokenType, name, symbol, address }
    });
  },

  balance: function (params) {
    const tokenUid = utils.core.param('tokenUid', params);
    const address = utils.core.param('address', params);

    return this.get({
      action:   'balance',
      payload:  { token_uid: tokenUid, address }
    });
  },

  createAddress: function (params) {
    const tokenUid = utils.core.param('tokenUid', params);
    const managed = utils.core.param('managed', params);

    return this.post({
      action:   'create_address',
      payload:  { token_uid: tokenUid, managed }
    });
  }
});

module.exports = Tokens;
