const test = require('ava');
const Mobius = require('../src/mobius');

test(t => {
  const expected = 'test';

  const mobius = new Mobius({ apiKey: expected });

  t.is(mobius.getApiKey(), expected);
})

test(t => {
  const expected = 'new';

  const mobius = new Mobius({ apiKey: 'old' });
  mobius.setApiKey(expected);

  t.is(mobius.getApiKey(), expected);
})
