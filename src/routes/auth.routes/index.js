const { Router } = require('express')
const register = require('./register')
const authorizationByPassword = require('./authorizationByPassword')
const authorizationByJwt = require('./authorizationByJwt')

const {
    checkUserExists,
    checkLoginLengthValid,
    checkPasswordLengthValid,
    checkJwtValid,
    checkJwtExist,
    cancelAuthDueToJwtNotValid,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.post(
    '/verify',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
    ],
    authorizationByJwt,
)

router.post(
    '/authorization',
    [
        checkUserExists,
    ],
    authorizationByPassword,
)

router.post(
    '/register',
    [
        checkUserExists,
        checkLoginLengthValid,
        checkPasswordLengthValid,
    ],
    register,
)

module.exports = router