const checkUserExists = require('./checkUserExists.middleware')
const checkPasswordLengthValid = require('./checkPasswordLengthValid.middleware')
const checkLoginLengthValid = require('./checkLoginLengthValid')

module.exports = {
    checkUserExists,
    checkPasswordLengthValid,
    checkLoginLengthValid,
}