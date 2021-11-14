const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const messages = require('../../message.constants.json')
const getUniqueIdForDbEntity = require('../../helpers/getUniqueIdForDbEntity')

module.exports = async (req, res) => {
    try {
        const { user } = req
        const { folderName } = req.body

        const foldersList = await FoldersList.findById(user.foldersListId)

        const folder = new Folder({
            entityId: await getUniqueIdForDbEntity(Folder),
            name: folderName,
            cardsId: [],
        })
        await folder.save()

        foldersList.foldersId.push(folder.id)
        await foldersList.save()

        return res.status(201).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}