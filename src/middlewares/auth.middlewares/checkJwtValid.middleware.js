const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        const { token, tokenIsExist } = req.body
        if (!tokenIsExist) throw new Error()

        const { userId } = jwt.verify(token, config.get('JWT_SECRET'))

        const user = await User.findById(userId)
        if (!user) throw new Error()

        req.body.user = user
        req.body.tokenIsValid = true
    } catch(e) {
        req.body.tokenIsValid = false
    } finally {
        next()
    }
}