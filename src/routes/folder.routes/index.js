const { Router } = require('express')
const getAllUsersFolders = require('./getAllUsersFolders')
const getFolderCardsByFolderId = require('./getFolderCardsByLimit')
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

const {
    checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
} = require('../../middlewares/card.middlewares')

const router = Router()


router.get(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
    ],
    getAllUsersFolders,
)

router.get(
    '/:id',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkFolderIsExistAndCancelResponseIfNot,
        checkUserHasAccessToFolderAndCancelResponseIfNot,
        checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
    ],
    getFolderCardsByFolderId,
)

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