const Folder = require('../models/Folder')

module.exports = async (id) => {
    const { name, entityId } = await Folder.findById(id)

    return {
        folderName: name,
        id: entityId,
    }
}