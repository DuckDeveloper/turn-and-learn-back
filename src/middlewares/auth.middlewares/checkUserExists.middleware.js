const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        const { login } = req.body
        const user = await User.findOne({ login })
        if (!user) throw new Error()

        req.body.user = user
        req.body.userIsExist = true
    } catch(e) {
        req.body.userIsExist = false
    } finally {
        next()
    }
}