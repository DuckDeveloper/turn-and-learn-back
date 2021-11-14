const { Router } = require('express')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const { uploadFile, deleteOldFile } = require('../../middlewares/file.middlewares')

const changeTheme = require('./changeTheme')
const changeAvatar = require('./changeAvatar')

const router = Router()

router.put(
    '/theme',
    [
        checkJwtIsValidAndCancelResponseIfNot,
    ],
    changeTheme,
)

router.put(
    '/avatar',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        uploadFile.single('image'),
        deleteOldFile,
    ],
    changeAvatar,
)

module.exports = router