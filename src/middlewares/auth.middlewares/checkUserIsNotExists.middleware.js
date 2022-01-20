const User = require('../../models/User')

const { error } = require('../../message.constants.json')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { username } = req.body

        const user = await User.findOne({ username })
        if (user) throw new Error()

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: { message: error.USER_IS_EXIST } }
    } finally {
        next()
    }
}
