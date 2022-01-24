const mongoose = require('mongoose')

const ClockSchema = new mongoose.Schema({
    milliseconds:{
        type: Number,
        max: [99, "milliseconds cant go over 100"]
    },
    seconds: {
        type: Number,
        max: [59, "60 seconds in a minute"]
    },
    minutes:{
        type: Number,
        max: [59, "60 minutes in an hout"]
    },

    hour:{
        type: Number
    },

    time: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
      },

})

module.exports = mongoose.model('Clock', ClockSchema);