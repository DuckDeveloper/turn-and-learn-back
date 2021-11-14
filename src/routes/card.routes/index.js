const { Router } = require('express')
const createCard = require('./createCard')
const editCard = require('./editCard')
const deleteCard = require('./deleteCard')
const getCardsByLimit = require('./getCardsByLimit')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkCardIsExistAndCancelResponseIfNot,
    checkContentFieldIsEmptyAndCancelResponseIfNot,
    checkUserHasAccessToCardAndCancelResponseIfNot,
    checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
} = require('../../middlewares/card.middlewares')

const router = Router()

router.get(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
    ],
    getCardsByLimit,
)

router.post(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkContentFieldIsEmptyAndCancelResponseIfNot,
    ],
    createCard,
)

router.put(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkContentFieldIsEmptyAndCancelResponseIfNot,
        checkCardIsExistAndCancelResponseIfNot,
        checkUserHasAccessToCardAndCancelResponseIfNot,
    ],
    editCard,
)

router.delete(
    '/',
    [
        checkJwtIsValidAndCancelResponseIfNot,
        checkCardIsExistAndCancelResponseIfNot,
        checkUserHasAccessToCardAndCancelResponseIfNot,
    ],
    deleteCard,
)

module.exports = router