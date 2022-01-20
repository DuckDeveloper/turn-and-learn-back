const { Router } = require('express')
const createCard = require('./createCard')
const editCard = require('./editCard')
const deleteCard = require('./deleteCard')
const getCardsByLimit = require('./getCardsByLimit')

const {
    checkJwtIsValid,
} = require('../../middlewares/auth.middlewares')
const {
    checkCardIsExist,
    checkContentFieldsIsValid,
    checkUserHasAccessToCard,
    checkLimitAndPageParamsIsValid,
    cancelRequestIfNotValid,
} = require('../../middlewares/card.middlewares')

const router = Router()

router.get(
    '/',
    [
        checkJwtIsValid,
        checkLimitAndPageParamsIsValid,
    ],
    cancelRequestIfNotValid,
    getCardsByLimit,
)

router.post(
    '/',
    [
        checkJwtIsValid,
        checkContentFieldsIsValid,
    ],
    cancelRequestIfNotValid,
    createCard,
)

router.put(
    '/',
    [
        checkJwtIsValid,
        checkContentFieldsIsValid,
        checkCardIsExist,
        checkUserHasAccessToCard,
    ],
    cancelRequestIfNotValid,
    editCard,
)

router.delete(
    '/',
    [
        checkJwtIsValid,
        checkCardIsExist,
        checkUserHasAccessToCard,
    ],
    cancelRequestIfNotValid,
    deleteCard,
)

module.exports = router