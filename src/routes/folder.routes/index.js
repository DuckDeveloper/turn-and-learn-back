const { Router } = require('express')
const getAllUsersFolders = require('./getAllUsersFolders')
const getFolderCardsByFolderId = require('./getFolderCardsByLimit')
const createFolder = require('./createFolder')
const editFolderName = require('./editFolderName')
const addCardsToFolder = require('./addCardsToFolder')
const deleteFolder = require('./deleteFolder')

const {
    checkJwtIsValid,
} = require('../../middlewares/auth.middlewares')
const {
    checkFolderNameIsValid,
    checkFolderIsExist,
    checkUserHasAccessToFolder,
    filterCardsByValidCardsId,
    filterCardsByUnique,
    cancelRequestIfNotValid,
} = require('../../middlewares/folder.middlewares')

const {
    checkLimitAndPageParamsIsValid,
} = require('../../middlewares/card.middlewares')

const router = Router()


router.get(
    '/',
    [
        checkJwtIsValid,
    ],
    cancelRequestIfNotValid,
    getAllUsersFolders,
)

router.get(
    '/:id',
    [
        checkJwtIsValid,
        checkFolderIsExist,
        checkUserHasAccessToFolder,
        checkLimitAndPageParamsIsValid,
    ],
    cancelRequestIfNotValid,
    getFolderCardsByFolderId,
)

router.post(
    '/',
    [
        checkJwtIsValid,
        checkFolderNameIsValid,
    ],
    cancelRequestIfNotValid,
    createFolder,
)

router.put(
    '/name',
    [
        checkJwtIsValid,
        checkFolderNameIsValid,
        checkFolderIsExist,
        checkUserHasAccessToFolder,
    ],
    cancelRequestIfNotValid,
    editFolderName,
)

router.put(
    '/add',
    [
        checkJwtIsValid,
        checkFolderIsExist,
        checkUserHasAccessToFolder,
        filterCardsByValidCardsId,
        filterCardsByUnique,
    ],
    cancelRequestIfNotValid,
    addCardsToFolder,
)

router.delete(
    '/',
    [
        checkJwtIsValid,
        checkFolderIsExist,
        checkUserHasAccessToFolder,
    ],
    cancelRequestIfNotValid,
    deleteFolder,
)

module.exports = router