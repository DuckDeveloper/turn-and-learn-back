const checkFoldersAmountIsValid = require('./checkFoldersAmountIsValid.middleware')
const cancelResponseIfFolderAmountIsNotValid = require('./cancelResponseIfFolderAmountIsNotValid.middleware')
const checkFolderNameIsValid = require('./checkFolderNameIsValid.middleware')
const cancelResponseIfFolderNameIsNotValid = require('./cancelResponseIfFolderNameIsNotValid.middleware')


module.exports = {
    checkFoldersAmountIsValid,
    cancelResponseIfFolderAmountIsNotValid,

    checkFolderNameIsValid,
    cancelResponseIfFolderNameIsNotValid,
}