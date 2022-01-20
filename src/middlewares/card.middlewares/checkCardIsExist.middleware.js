const Card = require('../../models/Card')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { id: entityId } = req.body

        const card = await Card.findOne({ entityId })
        if (!card) throw new Error()

        req.card = card

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: {} }
    } finally {
        next()
    }
}