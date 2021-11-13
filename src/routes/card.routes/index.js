const { Router } = require('express')
const createCard = require('./createCard')
const editCard = require('./editCard')
const deleteCard = require('./deleteCard')

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

router.put(
    '/',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
    ],
    editCard,
)

router.delete(
    '/',
    [
        checkJwtExist,
        checkJwtValid,
        cancelAuthDueToJwtNotValid,
    ],
    deleteCard,
)

module.exports = router