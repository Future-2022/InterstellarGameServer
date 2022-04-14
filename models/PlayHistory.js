const mongoose = require('mongoose')

const PlayHistorySchema = new mongoose.Schema({
    userName: {
        type: String,
        Required: true
    },
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
    },
    itemCnt: {
        type: Number,
        required: true
    },
    levelScore: {
        type: Number,
        required: true
    },
    starCnt: {
        type: Number,
        required: true
    }
})

module.exports = Boss = mongoose.model('playHistory', PlayHistorySchema)