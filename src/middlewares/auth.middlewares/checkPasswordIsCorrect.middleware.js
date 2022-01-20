const bcrypt = require('bcryptjs')

const { error } = require('../../message.constants.json')

module.exports = async (req, res, next) => {
    try {
        if (req.cancelOptions) return

        const { user } = req
        const { password } = req.body
        const passwordsIsMatch = await bcrypt.compare(password, user.password)

        if (!passwordsIsMatch) throw new Error()

    } catch(e) {
        req.cancelOptions = { responseStatusCode: 400, responseBody: { message: error.INVALID_PASSWORD } }
    } finally {
        next()
    }
}