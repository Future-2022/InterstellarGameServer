const mongoose = require('mongoose')

const PlayHistorySchema = new mongoose.Schema({

    land: {
        type: String,
        Required: true
    },
    level: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    Hp: {
        type: Number,
        required: true
    }
})

module.exports = Boss = mongoose.model('playHistory', PlayHistorySchema)