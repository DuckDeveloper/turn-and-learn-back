const { Router } = require('express')
const registration = require('./registration')
const authorizationByPassword = require('./authorizationByPassword')
const authorizationByJwt = require('./authorizationByJwt')

const {
    checkJwtIsValidAndCancelResponseIfNot,
    checkUserIsExistsAndCancelResponseIfExists,
    checkUserIsExistsAndCancelResponseIfNotExists,
    checkLoginIsValidAndCancelResponseIfNot,
    checkPasswordIsValidAndCancelResponseIfNot,
    checkPasswordIsCorrectAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.get(
    '/verification',
    [
        checkJwtIsValidAndCancelResponseIfNot,
    ],
    authorizationByJwt,
)

router.post(
    '/authorization',
    [
        checkUserIsExistsAndCancelResponseIfNotExists,
        checkPasswordIsCorrectAndCancelResponseIfNot,
    ],
    authorizationByPassword,
)

router.post(
    '/registration',
    [
        checkLoginIsValidAndCancelResponseIfNot,
        checkUserIsExistsAndCancelResponseIfExists,
        checkPasswordIsValidAndCancelResponseIfNot,
    ],
    registration,
)

module.exports = router