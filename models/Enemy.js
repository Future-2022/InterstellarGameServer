const mongoose = require('mongoose')

const EnemySchema = new mongoose.Schema({

  land: {
    type: String,
    Required: true
  },
  level: {
    type: String,
    required: true
  },
  enemies: [
    {
      enemy: {
        type: String,
        required: true
      },
    }
  ],
  number: {
    type: String,
    required: true
  }
})

module.exports = Enemy = mongoose.model('enemy', EnemySchema)