const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const { MAX_FOLDER_NAME_LENGTH } = require('../../project.config.json')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { user } = req
        const { folderName } = req.body

        if (
            typeof folderName !== 'string'
            || !folderName
            || folderName.length > MAX_FOLDER_NAME_LENGTH
        ) {
            throw new Error()
        }

        const foldersList = await FoldersList.findById(user.foldersListId)

        const folderNameIsUnique = await foldersList.foldersId.reduce(async (isUnique, fId) => {
            const folder = await Folder.findById(fId)
            if (folder.name === folderName) return false

            return isUnique
        }, true)
        if (!folderNameIsUnique) throw new Error()

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}