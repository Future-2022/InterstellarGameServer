const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({

  land: {
    type: String,
    Required: true
  },
  level: {
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
  number: {
    type: String,
    required: true
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)