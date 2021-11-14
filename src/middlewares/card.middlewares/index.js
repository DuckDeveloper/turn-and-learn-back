const checkContentFieldIsEmptyAndCancelResponseIfNot = require('./checkContentFieldIsEmptyAndCancelResponseIfNot.middleware')
const checkCardIsExistAndCancelResponseIfNot = require('./checkCardIsExistAndCancelResponseIfNot.middleware')
const checkUserHasAccessToCardAndCancelResponseIfNot = require('./checkUserHasAccessToCardAndCancelResponseIfNot.middleware')
const checkLimitAndPageParamsIsValidAndCancelResponseIfNot = require('./checkLimitAndPageParamsIsValidAndCancelResponseIfNot.middleware')

module.exports = {
    checkContentFieldIsEmptyAndCancelResponseIfNot,
    checkCardIsExistAndCancelResponseIfNot,
    checkUserHasAccessToCardAndCancelResponseIfNot,
    checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
}