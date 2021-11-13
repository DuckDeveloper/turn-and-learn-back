const Card = require('../../models/Card')
const CardsList = require('../../models/CardsList')

const messages = require('../messages.json')

module.exports = async (req, res) => {
    try {
        const { user } = req
        const { ru, en } = req.body

        const cardsList = await CardsList.findById(user.cardsListId)

        const card = new Card({
            ru,
            en,
        })
        await card.save()

        cardsList.cardsId.push(card.id)
        await cardsList.save()

        return res.status(201).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}