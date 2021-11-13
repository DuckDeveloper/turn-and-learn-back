const { Router } = require('express')

const {
    checkJwtValid,
    checkJwtExist,
    cancelAuthDueToJwtNotValid,
} = require('../../middlewares/auth.middlewares')
const { uploadFile, deleteOldFile } = require('../../middlewares/file.middlewares')

const changeTheme = require('./changeTheme')
const changeAvatar = require('./changeAvatar')

const router = Router()

router.put(
    '/theme',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
    ],
    changeTheme,
)

router.put(
    '/avatar',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
        uploadFile.single('image'),
        deleteOldFile,
    ],
    changeAvatar,
)

module.exports = router