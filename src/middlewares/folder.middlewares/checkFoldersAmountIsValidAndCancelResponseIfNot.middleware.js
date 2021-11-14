const FoldersList = require('../../models/FoldersList')

const { MAX_FOLDERS_AMOUNT } = require('../../project.config.json')

module.exports = async (req, res, next) => {
    try {
        const { user } = req

        const foldersList = await FoldersList.findById(user.foldersListId)

        if (foldersList.foldersId.length >= MAX_FOLDERS_AMOUNT) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}