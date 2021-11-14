const Card = require('../models/Card')

module.exports = async (id) => {
    const card = await Card.findById(id)

    return {
        en: card.en,
        ru: card.en,
        date: card.date,
        id: card.entityId,
    }
}