const checkContentFieldsIsValidAndCancelResponseIfNot = require('./checkContentFieldsIsValidAndCancelResponseIfNot.middleware')
const checkCardIsExistAndCancelResponseIfNot = require('./checkCardIsExistAndCancelResponseIfNot.middleware')
const checkUserHasAccessToCardAndCancelResponseIfNot = require('./checkUserHasAccessToCardAndCancelResponseIfNot.middleware')
const checkLimitAndPageParamsIsValidAndCancelResponseIfNot = require('./checkLimitAndPageParamsIsValidAndCancelResponseIfNot.middleware')

module.exports = {
    checkContentFieldsIsValidAndCancelResponseIfNot,
    checkCardIsExistAndCancelResponseIfNot,
    checkUserHasAccessToCardAndCancelResponseIfNot,
    checkLimitAndPageParamsIsValidAndCancelResponseIfNot,
}