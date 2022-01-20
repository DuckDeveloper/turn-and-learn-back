const { Schema, model } = require('mongoose')

const schema = new Schema({
    entityId: { type: Number, required: true, unique: true },
    firstSide: { type: String, required: true },
    secondSide: { type: String, required: true },
    date: { type: Date, default: Date.now },
})

module.exports = model('Card', schema)