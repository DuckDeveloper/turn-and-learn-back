const { Router } = require('express')
const registration = require('./registration')
const authorizationByPassword = require('./authorizationByPassword')
const authorizationByJwt = require('./authorizationByJwt')

const {
    checkUserExists,
    cancelResponseIfUserIsExists,
    cancelResponseIfUserIsNotExists,
    checkLoginIsValid,
    cancelResponseIfLoginIsNotValid,
    checkPasswordIsValid,
    cancelResponseIfPasswordIsNotValid,
    checkJwtIsValid,
    cancelResponseIfJwtIsNotValid,
    checkPasswordIsCorrect,
    cancelReponseIfPasswordIsNotCorrect,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.get(
    '/verification',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
    ],
    authorizationByJwt,
)

router.post(
    '/authorization',
    [
        checkUserExists,
        cancelResponseIfUserIsNotExists,
        checkPasswordIsCorrect,
        cancelReponseIfPasswordIsNotCorrect,
    ],
    authorizationByPassword,
)

router.post(
    '/registration',
    [
        checkLoginIsValid,
        cancelResponseIfLoginIsNotValid,
        checkUserExists,
        cancelResponseIfUserIsExists,
        checkPasswordIsValid,
        cancelResponseIfPasswordIsNotValid,
    ],
    registration,
)

module.exports = router