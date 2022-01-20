const messages = require('../../message.constants.json')

module.exports = async (req, res) => {
    try {
        const { card } = req
        const { cardFirstSide, cardSecondSide } = req.body


        card.firstSide = cardFirstSide
        card.secondSide = cardSecondSide
        await card.save()

        return res.status(202).json({})
    } catch(e) {
        return res.status(500).json({ message: messages.error.RANDOM_ERROR, e: e.message })
    }
}