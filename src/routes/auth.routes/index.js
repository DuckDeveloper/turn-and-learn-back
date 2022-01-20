const { Router } = require('express')
const registration = require('./registration')
const authorizationByPassword = require('./authorizationByPassword')
const authorizationByJwt = require('./authorizationByJwt')

const {
    checkJwtIsValid,
    checkUserIsNotExists,
    checkUserIsExists,
    checkUsernameIsValid,
    checkPasswordIsValid,
    checkPasswordIsCorrect,
    cancelRequestIfNotValid,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.get(
    '/verification',
    [
        checkJwtIsValid,
    ],
    cancelRequestIfNotValid,
    authorizationByJwt,
)

router.post(
    '/authorization',
    [
        checkUserIsExists,
        checkPasswordIsCorrect,
    ],
    cancelRequestIfNotValid,
    authorizationByPassword,
)

router.post(
    '/registration',
    [
        checkUsernameIsValid,
        checkUserIsNotExists,
        checkPasswordIsValid,
    ],
    cancelRequestIfNotValid,
    registration,
)

module.exports = router