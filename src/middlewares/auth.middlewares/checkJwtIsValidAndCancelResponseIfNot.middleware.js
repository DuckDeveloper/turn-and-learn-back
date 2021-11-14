const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        if (!token) throw new Error()

        const { userId } = jwt.verify(token, config.get('JWT_SECRET'))

        const user = await User.findById(userId)
        if (!user) throw new Error()

        req.user = user
        return next()
    } catch(e) {
        return res.status(401).json({})
    }
}