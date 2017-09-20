const map = require('map-obj');
const changeCase = require('change-case');

function toCaseKeys(object, f) {
  return map(object, function (key, val) {
      return [f(key), val]
    }, {deep: true})
}

function toSnakeCaseKeys(object) {
  return toCaseKeys(object, changeCase.snake);
}

function toCamelCaseKeys(object) {
  return toCaseKeys(object, changeCase.camel);
}

module.exports = {
  toSnakeCaseKeys,
  toCamelCaseKeys,
};
