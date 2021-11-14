const Card = require('../../models/Card')

module.exports = async (req, res, next) => {
    try {
        const { entityId } = req.body

        const card = await Card.findOne({ entityId })
        if (!card) throw new Error()

        req.card = card
        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}