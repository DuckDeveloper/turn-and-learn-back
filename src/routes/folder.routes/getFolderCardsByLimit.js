const { getEntityCardsByLimitAsync } = require('../../getters')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { folder, pageNumber, limitCardsOfPage } = req

        const neededCards = await getEntityCardsByLimitAsync(folder, { pageNumber, limitCardsOfPage })

        const headers = {
            'Total-Cards-Amount': folder.cardsId.length,
        }
        res.set(headers)

        return res.status(200).json({ cards: neededCards })
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}