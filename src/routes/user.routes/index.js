const { Router } = require('express')
const {
    checkJwtValid,
    checkJwtExist,
} = require('../../middlewares/auth.middlewares')

const changeTheme = require('./changeTheme')

const router = Router()

router.put(
    '/theme',
    [
        checkJwtExist,
        checkJwtValid,
    ],
    changeTheme,
)

module.exports = router