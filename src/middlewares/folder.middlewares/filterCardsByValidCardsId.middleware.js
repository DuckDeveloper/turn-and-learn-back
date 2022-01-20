const Card = require('../../models/Card')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { cardsId: cardsEntityId } = req.body

        const newCards = await Promise.all(cardsEntityId.map(async (entityId) => {
            const card = await Card.findOne({ entityId })
            if (!card) return false

            return card
        }))

        const filteredNewCards = newCards.filter(newCard => newCard)

        req.newCards = filteredNewCards

    } finally {
        next()
    }
}