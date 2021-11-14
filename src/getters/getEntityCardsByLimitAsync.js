const getCardDataByIdAsync = require('./getCardDataByIdAsync')

module.exports = async (entity, params) => {
    const { pageNumber, limitCardsOfPage } = params

    const startIndex = (pageNumber - 1) * limitCardsOfPage
    const neededCardsId = [...entity.cardsId].splice(startIndex, limitCardsOfPage)

    return Promise.all(neededCardsId.map(async cId => getCardDataByIdAsync(cId)))
}