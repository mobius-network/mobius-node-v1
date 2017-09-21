const test = require('ava');
const stringUtils = require('../../src/utils/string');

test('toPascalCase', t => {
  t.is(stringUtils.toPascalCase('foo_bar/baz'), 'FooBarBaz')
})

test('toCamelCase', t => {
  t.is(stringUtils.toCamelCase('foo_bar/baz'), 'fooBarBaz')
})
