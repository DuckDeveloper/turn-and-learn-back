const User = require('../../models/User')

const messages = require('../../message.constants.json')

module.exports = async (req, res, next) => {
    try {
        const { login } = req.body

        const user = await User.findOne({ login })
        if (user) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({ message: messages.error.USER_IS_EXIST })
    }
}