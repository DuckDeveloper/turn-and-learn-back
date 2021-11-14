const CardsList = require('../../models/CardsList')
const {getCardDataByIdAsync} = require('../../getters')

const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { user, limitCardsOfPage, pageNumber } = req

        const cardsList = await CardsList.findById(user.cardsListId)

        const startIndex = (pageNumber - 1) * limitCardsOfPage
        const neededCardsId = [...cardsList.cardsId].splice(startIndex, limitCardsOfPage)

        const neededCards = await Promise.all(neededCardsId.map(async cId => getCardDataByIdAsync(cId)))

        const headers = {
            'Total-Cards-Amount': cardsList.cardsId.length,
        }
        res.set(headers)

        return res.status(200).json({cards: neededCards})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}