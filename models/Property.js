const mongoose = require('mongoose')

const Property = mongoose.model('Property', {
  acquisition: String,
  sale: String,
  sold: Boolean,
  profit: String,
})

module.exports = Property