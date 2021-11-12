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
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.post(
    '/verify',
    [
        checkJwtExist,
        checkJwtValid,
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