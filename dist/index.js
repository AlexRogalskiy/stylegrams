
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./stylegrams.cjs.production.min.js')
} else {
  module.exports = require('./stylegrams.cjs.development.js')
}
