const mongoose = require('mongoose')

const BulletSchema = new mongoose.Schema({

  type: {
    type: String,
    Required: true
  },
  name: {
    type: String,
    required: true
  },
  force: {
    type: String,
    required: true
  },
  damage: {
    type: String,
    required: true
  },

})

module.exports = Bullet = mongoose.model('bullet', BulletSchema)