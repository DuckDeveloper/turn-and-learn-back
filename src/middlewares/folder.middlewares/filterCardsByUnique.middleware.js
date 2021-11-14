module.exports = async (req, res, next) => {
    try {
        const { folder, newCards } = req

        const cardsIdSet = new Set(folder.cardsId.map(cardId => String(cardId)))
        const filteredNewCards = newCards.filter(({ id }) => !cardsIdSet.has(String(id)))

        req.newCards = filteredNewCards
    } finally {
        next()
    }
}