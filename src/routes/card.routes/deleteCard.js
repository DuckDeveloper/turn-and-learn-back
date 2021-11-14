const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { user, card, cardsList } = req

        const foldersList = await FoldersList.findById(user.foldersListId)

        cardsList.cardsId = cardsList.cardsId.filter(cId => String(cId) !== String(card.id))
        await cardsList.save()

        await Promise.all(foldersList.foldersId.map(async (fId) => {
            const folder = await Folder.findById(fId)

            folder.cardsId = folder.cardsId.filter(cId => String(cId) !== String(card.id))
            await folder.save()

            return true
        }))

        await card.delete()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}