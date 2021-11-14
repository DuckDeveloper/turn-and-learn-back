const FoldersList = require('../../models/FoldersList')
const { getFolderDataByIdAsync } = require('../../getters')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { user } = req

        const foldersList = await FoldersList.findById(user.foldersListId)
        const folders = await Promise.all(foldersList.foldersId.map(async fId => getFolderDataByIdAsync(fId)))

        return res.status(200).json({ folders })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}