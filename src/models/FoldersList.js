const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    foldersId: [{ type: Types.ObjectId, ref: 'Folder' }],
})

module.exports = model('FoldersList', schema)