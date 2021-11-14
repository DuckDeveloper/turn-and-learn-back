const { Router } = require('express')
const createFolder = require('./createFolder')
const editFolderName = require('./editFolderName')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFoldersAmountIsValidAndCancelResponseIfNot,
    checkFolderIsExistAndCancelResponseIfNot,
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

module.exports = router