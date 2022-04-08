const mongoose = require('mongoose')

const BossSchema = new mongoose.Schema({

  land: {
    type: String,
    Required: true
  },
  level: {
    type: String,
    required: true
  },
  bosses: [
    {
      boss: {
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

module.exports = Boss = mongoose.model('boss', BossSchema)