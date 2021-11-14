const checkUserIsExistsAndCancelResponseIfNotExists = require('./checkUserIsExistsAndCancelResponseIfNotExists.middleware')
const checkUserIsExistsAndCancelResponseIfExists = require('./checkUserIsExistsAndCancelResponseIfExists.middleware')
const checkPasswordIsValidAndCancelResponseIfNot = require('./checkPasswordIsValidAndCancelResponseIfNot.middleware')
const checkLoginIsValidAndCancelResponseIfNot = require('./checkLoginIsValidAndCancelResponseIfNot.middleware')
const checkJwtIsValidAndCancelResponseIfNot = require('./checkJwtIsValidAndCancelResponseIfNot.middleware')
const checkPasswordIsCorrectAndCancelResponseIfNot = require('./checkPasswordIsCorrectAndCancelResponseIfNot.middleware')


module.exports = {
    checkUserIsExistsAndCancelResponseIfNotExists,
    checkUserIsExistsAndCancelResponseIfExists,
    checkPasswordIsValidAndCancelResponseIfNot,
    checkLoginIsValidAndCancelResponseIfNot,
    checkJwtIsValidAndCancelResponseIfNot,
    checkPasswordIsCorrectAndCancelResponseIfNot,
}