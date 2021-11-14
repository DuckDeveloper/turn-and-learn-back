const { Router } = require('express')
const createFolder = require('./createFolder')

const {
    checkJwtIsValid,
    cancelResponseIfJwtIsNotValid,
} = require('../../middlewares/auth.middlewares')
const {
    checkFoldersAmountIsValid,
    cancelResponseIfFolderAmountIsNotValid,
    checkFolderNameIsValid,
    cancelResponseIfFolderNameIsNotValid,
} = require('../../middlewares/folder.middlewares')

const router = Router()

router.post(
    '/',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
        checkFoldersAmountIsValid,
        cancelResponseIfFolderAmountIsNotValid,
        checkFolderNameIsValid,
        cancelResponseIfFolderNameIsNotValid,
    ],
    createFolder,
)

module.exports = router