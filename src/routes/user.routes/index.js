const { Router } = require('express')

const {
    checkJwtIsValid,
    cancelRequestIfNotValid,
} = require('../../middlewares/auth.middlewares')
const { uploadFile, deleteOldFile } = require('../../middlewares/file.middlewares')

const changeTheme = require('./changeTheme')
const changeAvatar = require('./changeAvatar')

const router = Router()

router.put(
    '/theme',
    [
        checkJwtIsValid,
    ],
    cancelRequestIfNotValid,
    changeTheme,
)

router.put(
    '/avatar',
    [
        checkJwtIsValid,
        uploadFile.single('image'),
        deleteOldFile,
    ],
    cancelRequestIfNotValid,
    changeAvatar,
)

module.exports = router