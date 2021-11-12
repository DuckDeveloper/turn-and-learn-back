const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    cardsId: [{ type: Types.ObjectId, ref: 'Card' }],
})

module.exports = model('CardsList', schema)