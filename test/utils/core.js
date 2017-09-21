const test = require('ava');
const coreUtils = require('../../src/utils/core');

test('param 1', (t) => {
  const expected = 42;
  const actual = coreUtils.param('fooBar', { fooBar: 42 });

  t.is(actual, expected);
});

test('param 2', (t) => {
  const expected = '12345';
  const actual = coreUtils.param('spamEggs', { fooBar: 42 }, '12345');

  t.is(actual, expected);
});


test('extend', (t) => {
  function BaseClass() {
    this.foo = 42;
  }
  BaseClass.extend = coreUtils.extend;
  BaseClass.prototype = { bar: 'baz' };

  const NewClass = BaseClass.extend({ spam: 'eggs' });

  const instance = new NewClass();

  t.true(instance instanceof BaseClass);
  t.is(instance.foo, 42);
  t.is(instance.bar, 'baz');
  t.is(instance.spam, 'eggs');
  t.is(coreUtils.extend, BaseClass.extend);
});
