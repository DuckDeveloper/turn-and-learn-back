const checkUserExists = require('./checkUserIsExists.middleware')
const cancelResponseIfUserIsExists = require('./cancelResponseIfUserIsExists.middleware')
const cancelResponseIfUserIsNotExists = require('./cancelResponseIfUserIsNotExists.middleware')

const checkPasswordIsValid = require('./checkPasswordIsValid.middleware')
const cancelResponseIfPasswordIsNotValid = require('./cancelResponseIfPasswordIsNotValid.middleware')

const checkLoginIsValid = require('./checkLoginIsValid.middleware')
const cancelResponseIfLoginIsNotValid = require('./cancelResponseIfLoginIsNotValid.middleware')

const checkJwtIsValid = require('./checkJwtIsValid.middleware')
const cancelResponseIfJwtIsNotValid = require('./cancelResponseIfJwtIsNotValid.middleware')

const checkPasswordIsCorrect = require('./checkPasswordIsCorrect.middleware')
const cancelReponseIfPasswordIsNotCorrect = require('./cancelReponseIfPasswordIsNotCorrect.middleware')


module.exports = {
    checkUserExists,
    cancelResponseIfUserIsExists,
    cancelResponseIfUserIsNotExists,

    checkPasswordIsValid,
    cancelResponseIfPasswordIsNotValid,

    checkLoginIsValid,
    cancelResponseIfLoginIsNotValid,

    checkJwtIsValid,
    cancelResponseIfJwtIsNotValid,

    checkPasswordIsCorrect,
    cancelReponseIfPasswordIsNotCorrect,
}