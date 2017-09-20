function param(name, params, value) {
  if (params[name]) {
    return params[name];
  }

  return value;
}

function extend(subClass) {
  const Super = this;
  const Constructor = function () { Super.apply(this, arguments); }

  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, subClass);

  return Constructor;
}

module.exports = {
  param,
  extend,
};
