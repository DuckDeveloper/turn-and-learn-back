const Card = require('../models/Card')

module.exports = async (id) => {
    const { en, ru, date, entityId } = await Card.findById(id)

    return {
        en,
        ru,
        date,
        id: entityId,
    }
}