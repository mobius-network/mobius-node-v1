const test = require('ava');
const objectUtils = require('../../src/utils/object');

test('toCamelCaseKeys', (t) => {
  const expected = { fooBar: 42, spamEggs: 42 };
  const actual = objectUtils.toCamelCaseKeys({ foo_bar: 42, spam_eggs: 42 });

  t.deepEqual(actual, expected);
});

test('toSnakeCaseKeys', (t) => {
  const expected = { foo_bar: 42, spam_eggs: 42 };
  const actual = objectUtils.toSnakeCaseKeys({ fooBar: 42, spamEggs: 42 });

  t.deepEqual(actual, expected);
});

test('removeUndefined', (t) => {
  const expected = {
    foo: 42, bar: null, baz: false, spam: '',
  };
  const actual = objectUtils.removeUndefined({
    foo: 42, bar: null, xxx: undefined, baz: false, spam: '',
  });

  t.deepEqual(actual, expected);
});
