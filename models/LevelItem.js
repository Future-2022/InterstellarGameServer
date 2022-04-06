const mongoose = require('mongoose')

const LevelItemSchema = new mongoose.Schema({

  land: {
    type: String,
    Required: true
  },
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
  items: [
    {
      item: {
        type: String,
        required: true
      },
    }
  ],
  maxHp: {
    type: String,
    required: true
  },
  

})

module.exports = LevelItem = mongoose.model('levelItem', LevelItemSchema)