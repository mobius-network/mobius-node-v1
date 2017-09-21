const test = require('ava');
const Mobius = require('../src/mobius');

test('setApiKey 1', t => {
  const expected = 'test';

  const mobius = new Mobius({ apiKey: expected });

  t.is(mobius.getApiKey(), expected);
})

test('setApiKey 2', t => {
  const expected = 'new';

  const mobius = new Mobius({ apiKey: 'old' });
  mobius.setApiKey(expected);

  t.is(mobius.getApiKey(), expected);
})
