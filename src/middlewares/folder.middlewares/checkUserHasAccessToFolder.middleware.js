const FoldersList = require('../../models/FoldersList')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { user, folder } = req

        const foldersList = await FoldersList.findById(user.foldersListId)
        const foldersIdSet = new Set(foldersList.foldersId.map((fId) => String(fId)))

        const userHasAccess = foldersIdSet.has(String(folder.id))
        if (!userHasAccess) throw new Error()

        req.foldersList = foldersList

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 403, responseBody: {} }
    } finally {
        next()
    }
}