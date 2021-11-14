const Card = require('../../models/Card')
const CardsList = require('../../models/CardsList')

const messages = require('../../message.constants.json')
const getUniqueIdForDbEntity = require('../../helpers/getUniqueIdForDbEntity')

module.exports = async (req, res) => {
    try {
        const { user } = req
        const { ru, en } = req.body

        const cardsList = await CardsList.findById(user.cardsListId)

        const card = new Card({
            entityId: await getUniqueIdForDbEntity(Card),
            ru,
            en,
        })
        await card.save()

        cardsList.cardsId = [card.id, ...cardsList.cardsId]
        await cardsList.save()

        return res.status(201).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}