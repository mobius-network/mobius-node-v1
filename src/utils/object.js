const map = require('map-obj');
const changeCase = require('change-case');

function toCaseKeys(object, f) {
  return map(object, (key, val) => ([f(key), val]), { deep: true });
}

function toSnakeCaseKeys(object) {
  return toCaseKeys(object, changeCase.snake);
}

function toCamelCaseKeys(object) {
  return toCaseKeys(object, changeCase.camel);
}

function removeUndefined(object) {
  const result = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (value !== undefined) result[key] = value;
  });

  return result;
}

module.exports = {
  toSnakeCaseKeys,
  toCamelCaseKeys,
  removeUndefined,
};
