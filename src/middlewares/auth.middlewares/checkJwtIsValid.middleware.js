const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const authToken = req.headers.authorization.split(' ').pop()
        if (!authToken) throw new Error()

        const { userId } = jwt.verify(authToken, config.get('JWT_SECRET'))

        const user = await User.findById(userId)
        if (!user) throw new Error()

        req.user = user

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 401, responseBody: {} }
    } finally {
        next()
    }
}