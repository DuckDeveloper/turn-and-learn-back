const CardsList = require('../../models/CardsList')

module.exports = async (req, res, next) => {
    try {
        const { user, card } = req

        const cardsList = await CardsList.findById(user.cardsListId)
        const cardsIdSet = new Set(cardsList.cardsId.map((cId) => String(cId)))

        const userHasAccess = cardsIdSet.has(String(card.id))
        if (!userHasAccess) throw new Error()

        req.cardsList = cardsList
        return next()
    } catch(e) {
        return res.status(403).json({})
    }
}