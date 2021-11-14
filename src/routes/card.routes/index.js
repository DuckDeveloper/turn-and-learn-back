const { Router } = require('express')
const createCard = require('./createCard')
const editCard = require('./editCard')
const deleteCard = require('./deleteCard')

const {
    checkJwtIsValidAndCancelResponseIfNot,
} = require('../../middlewares/auth.middlewares')
const {
    checkCardIsExistAndCancelResponseIfNot,
    checkContentFieldIsEmptyAndCancelResponseIfNot,
    checkUserHasAccessToCardAndCancelResponseIfNot,
} = require('../../middlewares/card.middlewares')

const router = Router()

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