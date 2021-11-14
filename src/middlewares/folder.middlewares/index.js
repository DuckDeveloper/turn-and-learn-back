const checkFoldersAmountIsValidAndCancelResponseIfNot = require('./checkFoldersAmountIsValidAndCancelResponseIfNot.middleware')
const checkFolderNameIsValidAndCancelResponseIfNot = require('./checkFolderNameIsValidAndCancelResponseIfNot.middleware')
const checkFolderIsExistAndCancelResponseIfNot = require('./checkFolderIsExistAndCancelResponseIfNot.middleware')

module.exports = {
    checkFoldersAmountIsValidAndCancelResponseIfNot,
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFolderIsExistAndCancelResponseIfNot,
}