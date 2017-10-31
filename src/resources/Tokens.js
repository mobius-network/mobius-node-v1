const utils = require('../utils');
const BaseResource = require('./BaseResource');

const { param } = utils.core;

const Tokens = BaseResource.extend({
  resource: 'tokens',

  register(params) {
    const tokenType = param('tokenType', params);
    const name = param('name', params);
    const symbol = param('symbol', params);
    const address = param('address', params);

    return this.post({
      action: 'register',
      payload: {
        tokenType, name, symbol, address,
      },
    });
  },

  balance(params) {
    const tokenUid = param('tokenUid', params);
    const address = param('address', params);

    return this.get({
      action: 'balance',
      payload: { tokenUid, address },
    });
  },

  createAddress(params) {
    const tokenUid = param('tokenUid', params);
    const managed = param('managed', params);

    return this.post({
      action: 'create_address',
      payload: { tokenUid, managed },
    });
  },

  registerAddress(params) {
    const tokenUid = param('tokenUid', params);
    const address = param('address', params);

    return this.post({
      action: 'register_address',
      payload: { tokenUid, address },
    });
  },

  transferManaged(params) {
    const tokenAddressUid = param('tokenAddressUid', params);
    const addressTo = param('addressTo', params);
    const numTokens = param('numTokens', params);

    return this.post({
      action: 'transfer/managed',
      payload: { tokenAddressUid, addressTo, numTokens },
    });
  },

  transferInfo(params) {
    const tokenAddressTransferUid = param('tokenAddressTransferUid', params);

    return this.get({
      action: 'transfer/info',
      payload: { tokenAddressTransferUid },
    });
  },
});

module.exports = Tokens;
