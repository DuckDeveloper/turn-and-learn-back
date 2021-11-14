const { Router } = require('express')
const createFolder = require('./createFolder')
const editFolderName = require('./editFolderName')
const addCardsToFolder = require('./addCardsToFolder')
const deleteFolder = require('./deleteFolder')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFoldersAmountIsValidAndCancelResponseIfNot,
    checkFolderIsExistAndCancelResponseIfNot,
    checkUserHasAccessToFolderAndCancelResponseIfNot,
    filterCardsByValidCardsId,
    filterCardsByUnique,
} = require('../../middlewares/folder.middlewares')

const router = Router()

router.post(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFoldersAmountIsValidAndCancelResponseIfNot,
        checkFolderNameIsValidAndCancelResponseIfNot,
    ],
    createFolder,
)

router.put(
    '/name',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFolderNameIsValidAndCancelResponseIfNot,
        checkFolderIsExistAndCancelResponseIfNot,
        checkUserHasAccessToFolderAndCancelResponseIfNot,
    ],
    editFolderName,
)

router.put(
    '/add',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFolderIsExistAndCancelResponseIfNot,
        checkUserHasAccessToFolderAndCancelResponseIfNot,
        filterCardsByValidCardsId,
        filterCardsByUnique,
    ],
    addCardsToFolder,
)

router.delete(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFolderIsExistAndCancelResponseIfNot,
        checkUserHasAccessToFolderAndCancelResponseIfNot,
    ],
    deleteFolder,
)

module.exports = router