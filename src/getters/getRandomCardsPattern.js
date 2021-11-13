const getRandomValuesFromArray = require('../helpers/getRandomValuesFromArray')
const cardsPattern = require('../patterns/cards.patterns')

module.exports = () => getRandomValuesFromArray(cardsPattern, 6)