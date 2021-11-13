const { Router } = require('express')

const createCard = require('./createCard')
const {
    checkJwtExist,
    checkJwtValid,
    cancelAuthDueToJwtNotValid,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.post(
    '/',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
    ],
    createCard,
)

module.exports = router