const FoldersList = require('../../models/FoldersList')

const {MAX_FOLDERS_AMOUNT} = require('../../project.config.json')

module.exports = async (req, res, next) => {
    try {
        const { user } = req

        const foldersList = await FoldersList.findById(user.foldersListId)

        if (foldersList.foldersId.length >= MAX_FOLDERS_AMOUNT) throw new Error()

        req.foldersAmountIsValid = true
    } catch(e) {
        req.foldersAmountIsValid = false
    } finally {
        next()
    }
}