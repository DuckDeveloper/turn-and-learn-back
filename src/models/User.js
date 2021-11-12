const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    theme: { type: String, default: 'light', required: true },
    cardsList: { type: Types.objectId, ref: 'CardsList', required: true },
    foldersList: { type: Types.objectId, ref: 'FoldersList', required: true },
})

module.exports = model('User', schema)