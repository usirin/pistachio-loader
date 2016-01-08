var compiler = require('pistachio-compiler')

module.exports = function(content) {
  this.cacheable()
  return compiler(content).toString()
}
