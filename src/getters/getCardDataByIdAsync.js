const Card = require('../models/Card')

module.exports = async (id) => {
    const { firstSide, secondSide, date, entityId } = await Card.findById(id)

    return {
        firstSide,
        secondSide,
        date,
        id: entityId,
    }
}