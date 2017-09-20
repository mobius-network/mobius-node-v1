const utils = require('../utils');

function ApiError(resource, action, message) {
  this.name = 'ApiError';
  this.message = utils.string.toPascalCase(resource) + '.' + utils.string.toCamelCase(action) + ' (' + message + ')';
}

ApiError.prototype = Error.prototype;

module.exports = ApiError;
