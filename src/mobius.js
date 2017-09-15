Object.defineProperty(Mobius.prototype, 'apiKey', {
  get: function () {
    return this.options.apiKey
  },

  set: function (value) {
    this.options.apiKey = value;
  }
})

function Mobius(options) {
  this.options = {
    apiKey: options.API_KEY
  }
}

module.exports = Mobius;
