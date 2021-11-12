const { Router } = require('express')
const register = require('./register')

const {
    checkUserExists,
    checkLoginLengthValid,
    checkPasswordLengthValid,
} = require('../../middlewares/auth.middlewares')

const router = Router()

router.post(
    '/register',
    [
        checkUserExists,
        checkLoginLengthValid,
        checkPasswordLengthValid,
    ],
    register,
)

module.exports = router