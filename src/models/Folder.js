const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    cardsId: [{ type: Types.ObjectId, ref: 'Card' }],
})

module.exports = model('Folder', schema)