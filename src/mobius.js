const Requestor = require('./Requestor');

const AppStore = require('./resources/AppStore');
const Tokens = require('./resources/Tokens');

function Mobius(options) {
  const requestor = new Requestor(options);

  this.appStore = new AppStore(requestor);
  this.tokens = new Tokens(requestor);
}

module.exports = Mobius;
