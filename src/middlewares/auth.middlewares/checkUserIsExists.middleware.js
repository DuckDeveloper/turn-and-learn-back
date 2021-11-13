const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        const { login } = req.body

        const user = await User.findOne({ login })
        if (!user) throw new Error()

        req.user = user
        req.userIsExist = true
    } catch(e) {
        req.userIsExist = false
    } finally {
        next()
    }
}