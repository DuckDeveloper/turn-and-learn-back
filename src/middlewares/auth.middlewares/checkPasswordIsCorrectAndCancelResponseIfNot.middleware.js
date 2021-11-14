const bcrypt = require('bcryptjs')

module.exports = async (req, res, next) => {
    try {
        const { user } = req
        const { password } = req.body
        const passwordsIsMatch = await bcrypt.compare(password, user.password)

        if (!passwordsIsMatch) throw new Error()

        return next()
    } catch(e) {
        return res.status(400).json({})
    }
}