const { Router } = require('express')
const createCard = require('./createCard')
const editCard = require('./editCard')
const deleteCard = require('./deleteCard')

const {
    checkJwtIsValid,
    cancelResponseIfJwtIsNotValid,
} = require('../../middlewares/auth.middlewares')
const {
    checkContentFieldIsEmpty,
    cancelResponseIfContentFieldIsEmpty,
    checkCardIsExist,
    cancelResponseIfCardIsNotExist,
} = require('../../middlewares/card.middlewares')

const router = Router()

router.post(
    '/',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
        checkContentFieldIsEmpty,
        cancelResponseIfContentFieldIsEmpty,
    ],
    createCard,
)

router.put(
    '/',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
        checkContentFieldIsEmpty,
        cancelResponseIfContentFieldIsEmpty,
        checkCardIsExist,
        cancelResponseIfCardIsNotExist,
    ],
    editCard,
)

router.delete(
    '/',
    [
        checkJwtIsValid,
        cancelResponseIfJwtIsNotValid,
        checkCardIsExist,
        cancelResponseIfCardIsNotExist,
    ],
    deleteCard,
)

module.exports = router