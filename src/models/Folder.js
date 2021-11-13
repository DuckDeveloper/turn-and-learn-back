const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    entityId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    cardsId: [{ type: Types.ObjectId, ref: 'Card' }],
})

module.exports = model('Folder', schema)