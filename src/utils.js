const map = require('map-obj');
const changeCase = require('change-case');


function extend(subClass) {
  const Super = this;
  function Constructor(...args) { Super.apply(this, args); }

  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, subClass);

  return Constructor;
}


function toCaseKeys(object, f) {
  return map(object, (key, val) => ([f(key), val]), { deep: true });
}

function toSnakeCaseKeys(object) {
  return toCaseKeys(object, changeCase.snake);
}

function toCamelCaseKeys(object) {
  return toCaseKeys(object, changeCase.camel);
}

module.exports = {
  extend,
  toSnakeCaseKeys,
  toCamelCaseKeys,
};
