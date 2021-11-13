const Card = require('../../models/Card')
const CardsList = require('../../models/CardsList')
const Folder = require('../../models/Folder')
const FoldersList = require('../../models/FoldersList')

const messages = require('../messages.json')

module.exports = async (req, res) => {
    try {
        const { user } = req
        const { entityId } = req.body

        const card = await Card.findOne({ entityId })
        if (!card) throw new Error()

        const cardsList = await CardsList.findById(user.cardsListId)
        if (!cardsList) throw new Error()

        const foldersList = await FoldersList.findById(user.foldersListId)
        if (!foldersList) throw new Error()

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