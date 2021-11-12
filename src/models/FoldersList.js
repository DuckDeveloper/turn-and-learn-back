const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    folders: [{ type: Types.ObjectId, ref: 'Folder' }],
})

module.exports = model('FoldersList', schema)