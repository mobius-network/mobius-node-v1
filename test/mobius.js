const test = require('ava');
const Mobius = require('../src/mobius');

test(t => {
  const expected = 'test';

  const mobius = new Mobius({ API_KEY: expected });

  t.is(mobius.apiKey, expected);
})

test(t => {
  const expected = 'new';

  const mobius = new Mobius({ API_KEY: 'old' });
  mobius.apiKey = expected;

  t.is(mobius.apiKey, expected);
})
