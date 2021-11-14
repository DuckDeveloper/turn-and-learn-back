const checkFoldersAmountIsValidAndCancelResponseIfNot = require('./checkFoldersAmountIsValidAndCancelResponseIfNot.middleware')
const checkFolderNameIsValidAndCancelResponseIfNot = require('./checkFolderNameIsValidAndCancelResponseIfNot.middleware')
const checkFolderIsExistAndCancelResponseIfNot = require('./checkFolderIsExistAndCancelResponseIfNot.middleware')
const checkUserHasAccessToFolderAndCancelResponseIfNot = require('./checkUserHasAccessToFolderAndCancelResponseIfNot.middleware')
const filterCardsByValidCardsId = require('./filterCardsByValidCardsId.middleware')
const filterCardsByUnique = require('./filterCardsByUnique.middleware')

module.exports = {
    checkFoldersAmountIsValidAndCancelResponseIfNot,
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFolderIsExistAndCancelResponseIfNot,
    checkUserHasAccessToFolderAndCancelResponseIfNot,
    filterCardsByValidCardsId,
    filterCardsByUnique,
}