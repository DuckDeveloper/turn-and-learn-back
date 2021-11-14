const { Router } = require('express')
const createFolder = require('./createFolder')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkFolderNameIsValidAndCancelResponseIfNot,
    checkFoldersAmountIsValidAndCancelResponseIfNot,
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

module.exports = router