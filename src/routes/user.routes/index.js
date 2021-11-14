const { Router } = require('express')

const {
    checkJwtIsValid,
    cancelResponseIfJwtIsNotValid,
} = require('../../middlewares/auth.middlewares')
const { uploadFile, deleteOldFile } = require('../../middlewares/file.middlewares')

const changeTheme = require('./changeTheme')
const changeAvatar = require('./changeAvatar')

const router = Router()

router.put(
    '/theme',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
    ],
    changeTheme,
)

router.put(
    '/avatar',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
        uploadFile.single('image'),
        deleteOldFile,
    ],
    changeAvatar,
)

module.exports = router