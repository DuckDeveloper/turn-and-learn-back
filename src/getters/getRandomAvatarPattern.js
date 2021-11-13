const getRandomValuesFromArray = require('../helpers/getRandomValuesFromArray')
const avatarsPattern = require('../patterns/avatars.patterns')

module.exports = () => getRandomValuesFromArray(avatarsPattern, 1)[0]