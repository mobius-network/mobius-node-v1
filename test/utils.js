const test = require('ava');
const utils = require('../src/utils');


test('extend', (t) => {
  function BaseClass() {
    this.foo = 42;
  }
  BaseClass.extend = utils.extend;
  BaseClass.prototype = { bar: 'baz' };

  const NewClass = BaseClass.extend({ spam: 'eggs' });

  const instance = new NewClass();

  t.true(instance instanceof BaseClass);
  t.is(instance.foo, 42);
  t.is(instance.bar, 'baz');
  t.is(instance.spam, 'eggs');
  t.is(utils.extend, BaseClass.extend);
});


test('toCamelCaseKeys', (t) => {
  const expected = { fooBar: 42, spamEggs: 42 };
  const actual = utils.toCamelCaseKeys({ foo_bar: 42, spam_eggs: 42 });

  t.deepEqual(actual, expected);
});

test('toSnakeCaseKeys', (t) => {
  const expected = { foo_bar: 42, spam_eggs: 42 };
  const actual = utils.toSnakeCaseKeys({ fooBar: 42, spamEggs: 42 });

  t.deepEqual(actual, expected);
});
