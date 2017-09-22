# Mobius Node.js API Client

[![Version](https://img.shields.io/npm/v/@mobius-network/mobius-node.svg)](https://www.npmjs.org/package/@mobius-network/mobius-node)
[![Downloads](https://img.shields.io/npm/dm/@mobius-network/mobius-node.svg)](https://www.npmjs.com/package/@mobius-network/mobius-node)
[![Try on RunKit](https://badge.runkitcdn.com/@mobius-network/mobius-node.svg)](https://runkit.com/npm/@mobius-network/mobius-node)

The Mobius Node.js Client provides simple access to the Mobius API for applications written on Node.js

## Installation

Install the package with `npm`:
```
$ npm install @mobius-network/mobius-node --save
```
or with `yarn`
```
$ yarn add @mobius-network/mobius-node
```

## Usage

For importing library use:
```js
const Mobius = require('@mobius-network/mobius-node');
```
On ES6 it's look like:
```js
import Mobius from '@mobius-network/mobius-node';
```

The library need to be configured with your API secret key which you can create in [Mobius DApp Store](https://beta.mobius.network/store/developer)
```js
const mobius = new Mobius({
  apiKey: 'your_api_key',
});
```

### Promises

Every method returns a chainable promise which can be used like this:

```js
mobius.appStore
  .balance({ appUid: 'f9e5e943', email: 'mail@example.com' })
  .then(balance => {
    if (balance.numCredits > 0) {
      mobius.appStore.use({ appUid: '581d1351', email: 'mail@example.com', numCredits: 1 });
    }
  })
  .catch(error => console.error(error));
```

## Methods

- ##### `mobius.appStore.balance({ appUid, email })`
  Get balance of credits for email.

- ##### `mobius.appStore.use({ appUid, email, numCredits })`
  Use numCredits from user with email.

- ##### `mobius.tokens.register({ tokenType, name, symbol, address })`
  Register a token.

- ##### `mobius.tokens.balance({ tokenUid, address })`
  Query the number of tokens specified by the token.

- ##### `mobius.tokens.createAddress({ tokenUid, managed })`
  Create an address for the token.

- ##### `mobius.tokens.registerAddress({ tokenUid, address })`
  Register an address for the token.

- ##### `mobius.tokens.transferManaged({ tokenAddressUid, addressTo, numTokens })`
  Transfer tokens from a Mobius managed address to a specified address.

- ##### `mobius.tokens.transferUnmanaged({ addressTo, numTokens, privateKey })`
  Perform an ERC20 transfer call sending tokens from the address identified by the `privateKey` to `addressTo`.

- ##### `mobius.tokens.transferInfo({ tokenAddressTransferUid })`
  Get the status and transaction hash of a Mobius managed token transfer.


## More information

See the [REST API docs](https://mobius.network/docs/)

## Development

Run all tests

```
$ yarn install
$ yarn run test
```
