const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const {folder, newCards} = req
        const newCardsId = newCards.map(({id}) => id)

        folder.cardsId = [...newCardsId, ...folder.cardsId]
        await folder.save()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}