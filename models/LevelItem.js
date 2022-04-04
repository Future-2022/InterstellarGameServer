const mongoose = require('mongoose')

const LevelItemSchema = new mongoose.Schema({

  level: {
    type: String,
    required: true
  },
  maxScore: {
    type: String,
    required: true
  },
  enemy: {
    type: String,
    required: true
  },
  item: {
      type: String,
      required: true
  }

})

module.exports = LevelItem = mongoose.model('levelItem', LevelItemSchema)