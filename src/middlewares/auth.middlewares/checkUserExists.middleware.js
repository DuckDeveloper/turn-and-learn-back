const User = require('../../models/User')

module.exports = async (req, res, next) => {
    try {
        const { login } = req.body
        await User.findOne({ login })

        req.body.userIsExist = true
    } catch(e) {
        req.body.userIsExist = false
    } finally {
        next()
    }
}