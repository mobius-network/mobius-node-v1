const BaseResource = require('../abstract/Resource');

const Tokens = BaseResource.extend({
  resource: 'tokens',

  register({ tokenType, name, symbol, address }) {
    return this.post({
      action: 'register',
      payload: { tokenType, name, symbol, address },
    });
  },

  balance({ tokenUid, address }) {
    return this.get({
      action: 'balance',
      payload: { tokenUid, address },
    });
  },

  createAddress({ tokenUid, managed }) {
    return this.post({
      action: 'create_address',
      payload: { tokenUid, managed },
    });
  },

  registerAddress({ tokenUid, address }) {
    return this.post({
      action: 'register_address',
      payload: { tokenUid, address },
    });
  },

  transferManaged({ tokenAddressUid, addressTo, numTokens }) {
    return this.post({
      action: 'transfer/managed',
      payload: { tokenAddressUid, addressTo, numTokens },
    });
  },

  transferInfo({ tokenAddressTransferUid }) {
    return this.get({
      action: 'transfer/info',
      payload: { tokenAddressTransferUid },
    });
  },
});

module.exports = Tokens;
