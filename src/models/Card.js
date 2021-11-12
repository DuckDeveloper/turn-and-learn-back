const { Schema, model } = require('mongoose')

const schema = new Schema({
    en: { type: String, required: true },
    ru: { type: String, required: true },
    date: { type: Date.now, required: true },
})

module.exports = model('Card', schema)