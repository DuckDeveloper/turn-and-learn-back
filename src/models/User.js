const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    theme: { type: String, default: 'light' },
    cardsListId: { type: Types.ObjectId, ref: 'CardsList', required: true },
    foldersListId: { type: Types.ObjectId, ref: 'FoldersList', required: true },
})

module.exports = model('User', schema)