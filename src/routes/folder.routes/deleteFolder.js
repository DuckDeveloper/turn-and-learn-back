const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { folder, foldersList } = req

        foldersList.foldersId = foldersList.foldersId.filter(fId => String(fId) !== String(folder.id))
        await foldersList.save()

        await folder.delete()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}