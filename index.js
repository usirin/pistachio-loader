var compiler = require('pistachio-compiler')

module.exports = function(content) {
  return compiler(content).toString()
}
