const { Router } = require('express')
const createFolder = require('./createFolder')
const editFolderName = require('./editFolderName')
const addCardsToFolder = require('./addCardsToFolder')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFoldersAmountIsValidAndCancelResponseIfNot,
    checkFolderIsExistAndCancelResponseIfNot,
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
    ],
    editFolderName,
)

router.put(
    '/add',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFolderIsExistAndCancelResponseIfNot,
        filterCardsByValidCardsId,
        filterCardsByUnique,
    ],
    addCardsToFolder,
)

module.exports = router