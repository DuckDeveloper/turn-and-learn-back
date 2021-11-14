const Folder = require('../models/Folder')

module.exports = async (id) => {
    const folder = await Folder.findById(id)

    return {
        folderName: folder.name,
        id: folder.entityId,
    }
}