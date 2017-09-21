const test = require('ava');
const apiUtils = require('../../src/api/utils');

test('handleError 1', (t) => {
  const expected = 'message';

  const error = t.throws(() => {
    apiUtils.handleError({
      error: 'message',
    });
  }, Error);

  t.is(error.message, expected);
});

test('handleError 2', (t) => {
  const expected = { foo: 42, spam: 'eggs' };

  const actual = apiUtils.handleError({ foo: 42, spam: 'eggs' });

  t.deepEqual(actual, expected);
});

test('makeUrl', (t) => {
  const expected = 'https://mobius.network/foo/bar?api_key=12345';
  const actual = apiUtils.makeUrl({
    host: 'https://mobius.network',
    resource: 'foo',
    action: 'bar',
    apiKey: '12345',
    payload: {},
  });

  t.is(actual, expected);
});

test('makeHeaders', (t) => {
  const expected = { Authorization: '12345' };
  const actual = apiUtils.makeHeaders({
    auth: '12345',
  });

  t.deepEqual(actual, expected);
});
