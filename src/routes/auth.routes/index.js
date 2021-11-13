const { Router } = require('express')
const registration = require('./registration')
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
    '/verification',
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
    '/registration',
    [
        checkUserExists,
        checkLoginLengthValid,
        checkPasswordLengthValid,
    ],
    registration,
)

module.exports = router