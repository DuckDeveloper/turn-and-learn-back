const getRandomValuesFromArray = require('../helpers/getRandomValuesFromArray')
const folderTemplateNamesPattern = require('../patterns/folderTemplateNames.patterns')

module.exports = () => getRandomValuesFromArray(folderTemplateNamesPattern, 1)[0]