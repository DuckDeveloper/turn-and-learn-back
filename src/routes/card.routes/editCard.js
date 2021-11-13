const Card = require('../../models/Card')

const messages = require('../messages.json')

module.exports = async (req, res) => {
    try {
        const { ru, en, entityId } = req.body

        const card = await Card.findOne({ entityId })
        if (!card) throw new Error()

        card.ru = ru
        card.en = en
        await card.save()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}